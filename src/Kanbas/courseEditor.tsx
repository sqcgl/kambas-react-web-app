import { useSelector } from "react-redux";
import * as db from "./Database";
import React, { useState } from "react";
export default function CourseEditor({
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
  const enrollments = db.enrollments;
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [checkedCourses, setCheckedCourses] = useState<{
    [key: string]: boolean;
  }>(
    courses.reduce((acc, course) => {
      const isEnrolled = enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      );
      acc[course._id] = isEnrolled; // Set the checkbox as checked if enrolled
      return acc;
    }, {} as { [key: string]: boolean })
  );
  const handleCheck = (course: any) => {
    // Toggle the checked state for the course
    setCheckedCourses((prev) => ({
      ...prev,
      [course._id]: !prev[course._id],
    }));

    // Add or delete the course based on the new checked state
    if (checkedCourses[course._id]) {
      deleteCourse(course._id);
    } else {
      setCourse(course);
    }
  };
  return (
    <div id="wd-show-courses">
      <div>
        <h2>Courses</h2>
      </div>
      <div>
        {courses.map((course) => (
          <>
            <div>
              <span>{course.name}</span>
              <span className="float-end">
                <label>
                  <input
                    type="checkbox"
                    checked={checkedCourses[course._id] || false}
                    onChange={() => handleCheck(course)}
                  />{" "}
                  Enrolled
                </label>
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
