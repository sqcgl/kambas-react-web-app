import ModuelControlButtons from "./ModuelControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router-dom";
import { courses } from "../../Database";
import { assignments } from "../../Database";

export default function AssignmentView() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div>
      <ul className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary " id="wd-assignments-title ">
            <BsGripVertical className="me-2 fs-3" />
            <BiSolidDownArrow className="me-2" />
            Assigments <ModuelControlButtons />
          </div>
          <ul className="list-group rounded-0" id="wd-assignment-list">
            {filteredAssignments.map((assignment) => (
              <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="me-2 fs-3" />
                <div>
                  <a
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h4 className="mb-0">
                      <b>{assignment.title}</b>
                    </h4>
                  </a>
                  <p className="mb-0 text-muted">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> {course?.startDate} | <b>Due</b>{" "}
                    {course?.endDate}| 100 pts
                  </p>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
