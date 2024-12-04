import { useState } from "react";

export default function EnrolledCourses({
  courses,
  setCourse,
  deleteCourse,
}: {
  courses: any[];
  setCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
}) {
  // Create a state to manage checked status for each course
  const [checkedCourses, setCheckedCourses] = useState<{
    [key: string]: boolean;
  }>(
    courses.reduce((acc, course) => {
      acc[course._id] = true; // Mark all courses as checked
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
      <div className="form-check form-switch">
        {courses.map((course) => (
          <>
            <div>
              <span>{course.name}</span>
              <span className="float-end">
                <label>
                  <input
                    className="form-check-input"
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
