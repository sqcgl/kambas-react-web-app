import ModuelControlButtons from "./ModuelControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { courses } from "../../Database";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment, setAssignments } from "../Assignments/reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
export default function AssignmentView() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const course = courses.find((course) => course._id === cid);
  const dispatch = useDispatch();
  const removeAssignment = async (moduleId: string) => {
    await assignmentsClient.deleteAssignment(moduleId);
    dispatch(deleteAssignment(moduleId));
  };
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const handleDelete = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      try {
        await removeAssignment(assignmentId); // Call the removeAssignment function
        console.log(`Assignment ${assignmentId} deleted successfully`);
      } catch (error) {
        console.error(`Failed to delete assignment ${assignmentId}:`, error);
      }
    }
  };
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
            {assignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="me-2 fs-3" />
                <div>
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h4 className="mb-0">
                      <b>{assignment.title}</b>
                    </h4>
                  </Link>
                  <p className="mb-0 text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <b>Not available until</b>{" "}
                    {assignment.availableFromDate || "Not set"} |<b>Due</b>{" "}
                    {assignment.dueDate || "Not set"} |{assignment.points || 0}{" "}
                    pts
                  </p>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <FaTrash
                    className="text-danger me-2 mb-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(assignment._id)}
                  />
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
