import { useSelector } from "react-redux";
import * as db from "./Database";

export default function EnrolledCourses() {
  const { courses } = db;
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  return (
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
          <p>{course.name}</p>
        ))}
    </div>
  );
}
