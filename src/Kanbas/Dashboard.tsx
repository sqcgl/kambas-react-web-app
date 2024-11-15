import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useSelector } from "react-redux";
import CourseEditor from "./courseEditor";
import EnrolledCourses from "./enrolledCourses";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const [isCourseEditorVisible, setCourseEditorVisible] = useState(false);
  const [showCourses, setshowCourses] = useState(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const openEditor = () => {
    if (!isCourseEditorVisible) {
      setCourseEditorVisible(true);
    }
    setshowCourses((prev) => !prev);
  };
  const handleEditor = () => {
    if (isCourseEditorVisible) {
      if (showCourses) {
        return (
          <CourseEditor
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
          />
        );
      } else if (!showCourses) {
        return (
          <EnrolledCourses
            courses={courses}
            course={course}
            setCourse={setCourse}
            deleteCourse={deleteCourse}
          />
        );
      }
    }
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser.role === "STUDENT" && (
        <>
          <button onClick={openEditor} className="btn btn-primary float-end">
            {isCourseEditorVisible ? "Enrolled" : "Enrollment"}
          </button>
          {handleEditor()}
        </>
      )}

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <br />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <br />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 cow-cols-md-5 g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map((course) => (
              <div
                className="wd-dashboard-couse col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <div>
                    <Link
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <img
                        src="/images/reactjs.jpg"
                        width="100%"
                        height={160}
                      />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>
                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
