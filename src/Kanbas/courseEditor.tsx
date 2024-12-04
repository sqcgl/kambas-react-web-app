import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
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
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [checkedCourses, setCheckedCourses] = useState<{
    [key: string]: boolean;
  }>({});

  // Fetch all courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseClient.fetchAllCourses(); // Fetch all courses
        setAllCourses(data); // Populate allCourses state

        // Initialize checkedCourses based on passed-in enrolled courses
        const initialCheckedState = data.reduce((acc: any, course: any) => {
          const isChecked = courses.some(
            (enrolled) => enrolled._id === course._id
          ); // Check if the course is enrolled
          acc[course._id] = isChecked;
          return acc;
        }, {} as { [key: string]: boolean });

        setCheckedCourses(initialCheckedState);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [courses]);

  const handleCheck = (course: any) => {
    // Toggle the checked state for the course
    const isCurrentlyChecked = checkedCourses[course._id];
    setCheckedCourses((prev) => ({
      ...prev,
      [course._id]: !isCurrentlyChecked,
    }));

    // Add or delete the course based on the new checked state
    if (isCurrentlyChecked) {
      deleteCourse(course); // Uncheck means removing enrollment
    } else {
      setCourse(course); // Check means adding enrollment
      addNewCourse(); // Ensure course is added if checked
    }
  };
  return (
    <div id="wd-show-courses">
      <div>
        <h2>Courses</h2>
      </div>
      <div className="form-check form-switch">
        {allCourses.map((course) => (
          <>
            <div>
              <span>{course.name}</span>
              <span className="float-end">
                <label>
                  <input
                    className="form-check-input"
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
