import { useSelector } from "react-redux";
import * as db from "./Database";
import { useState } from "react";

export default function EnrolledCourses({
  courses,
  course,
  setCourse,
  deleteCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
}) {
  const [isChecked, setIsChecked] = useState(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  // Create a state to manage checked status for each course
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
  const handleCheck = (courseId: any) => {
    // Toggle the checked state
    setCheckedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));

    // If unchecked, delete the course using deleteCourse
    if (checkedCourses[courseId]) {
      deleteCourse(courseId);
    }
  };
  return (
    <div>
      <div>
        <h2>Enrolled Courses</h2>
      </div>
      <div>
        {courses
          .filter((course) =>
            enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            )
          )
          .map((course) => (
            <>
              <div>
                <span>{course.name}</span>
                <span className="float-end">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedCourses[course._id] || false}
                      onChange={() => handleCheck(course._id)}
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
