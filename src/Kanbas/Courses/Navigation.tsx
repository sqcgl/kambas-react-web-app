import path from "path";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-course-home-link"
        to={`/Kanbas/Courses/${cid}/Home`}
        className={`list-group-item border border-0
          ${pathname.includes("Home") ? "active" : "text-danger"}
          `}
      >
        Home
      </Link>
      <Link
        id="wd-course-modules-link"
        to={`/Kanbas/Courses/${cid}/Modules`}
        className={`list-group-item border border-0
          ${pathname.includes("Modules") ? "active" : "text-danger"}
          `}
      >
        Modules
      </Link>
      <Link
        id="wd-course-piazza-link"
        to={`/Kanbas/Courses/${cid}/Piazza`}
        className={`list-group-item border border-0
          ${pathname.includes("Piazza") ? "active" : "text-danger"}
          `}
      >
        Piazza
      </Link>
      <Link
        id="wd-course-zoom-link"
        to={`/Kanbas/Courses/${cid}/Zoom`}
        className={`list-group-item border border-0
          ${pathname.includes("Zoom") ? "active" : "text-danger"}
          `}
      >
        Zoom
      </Link>
      <Link
        id="wd-course-quizzes-link"
        to={`/Kanbas/Courses/${cid}/Assignments`}
        className={`list-group-item border border-0
          ${pathname.includes("Assignments") ? "active" : "text-danger"}
          `}
      >
        Assignments
      </Link>
      <Link
        id="wd-course-assignments-link"
        to={`/Kanbas/Courses/${cid}/Quizzes`}
        className={`list-group-item border border-0
          ${pathname.includes("Quizzes") ? "active" : "text-danger"}
          `}
      >
        Quizzes
      </Link>
      <Link
        id="wd-course-grades-link"
        to={`/Kanbas/Courses/${cid}/Grades`}
        className={`list-group-item border border-0
          ${pathname.includes("Grades") ? "active" : "text-danger"}
          `}
      >
        Grades
      </Link>
      <Link
        id="wd-course-people-link"
        to={`/Kanbas/Courses/${cid}/People`}
        className={`list-group-item border border-0
          ${pathname.includes("People") ? "active" : "text-danger"}
          `}
      >
        People
      </Link>
    </div>
  );
}
