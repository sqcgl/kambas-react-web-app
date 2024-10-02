import ModuelControlButtons from "./ModuelControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function AssignmentView() {
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
            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />
              <div>
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h4 className="mb-0">
                    <b>A1</b>
                  </h4>
                </a>
                <p className="mb-0 text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 | <b>Due</b> May 6 at 11:59pm
                  | 100 pts
                </p>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />
              <div>
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h4 className="mb-0">
                    <b>A2</b>
                  </h4>
                </a>
                <p className="mb-0 text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 | <b>Due</b> May 6 at
                  11:59pm | 100 pts
                </p>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <TfiWrite className="me-2 fs-3" />
              <div>
                <a
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  className="wd-assignment-link"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h4 className="mb-0">
                    <b>A3</b>
                  </h4>
                </a>
                <p className="mb-0 text-muted">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 | <b>Due</b> May 6 at
                  11:59pm | 100 pts
                </p>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
