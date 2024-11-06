import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../Database";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid } = useParams();

  // Get assignments from Redux store
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  // Find existing assignment if aid is provided
  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );
  const course = courses.find((course) => course._id === cid);
  // Initializing assignment state
  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      name: "", // Using 'name' here
      description: "",
      points: 100,
      dueDate: course?.endDate || "", // Default to course end date
      availableFromDate: course?.startDate || "", // Default to course start date
      availableUntilDate: course?.endDate || "", // Default to course end date
      course: cid, // Ensure course ID is set
    }
  );

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      console.log("Dispatching addAssignment with:", assignment);
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container" id="wd-assignment-editor">
      <div className="mb-3 row" id="wd-name">
        <label htmlFor="assignmentName" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignmentName"
          placeholder="Assignment Name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="assignmentDescription" className="form-label">
          Assignment Description
        </label>
        <textarea
          className="form-control"
          id="assignmentDescription"
          placeholder="New Assignment Description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>
      <div className="mb-3 row" id="wd-points">
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="points"
            className="form-control"
            placeholder="100"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>
      </div>
      {/* Assign To */}
      <div className="mb-3 row">
        <label htmlFor="assign" className="col-sm-2 col-form-label text-end">
          Assign
        </label>
        <div className="col-sm-10 border rounded p-3 mt-2" id="wd-assign-to">
          {/* Due Date */}
          <div id="wd-due-date">
            <label htmlFor="due" className="form-label mt-2">
              <b>Due</b>
            </label>
            <div>
              <input
                type="date"
                id="due"
                className="form-control mt-2"
                value={course?.endDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, endDate: e.target.value })
                }
              />
            </div>
          </div>
          {/* Available From and Until Dates */}
          <div className="row mt-2">
            <div className="col" id="wd-available-from">
              <label htmlFor="availableFromDate" className="form-label mt-2">
                <b>Available from</b>
              </label>
              <div>
                <input
                  type="date"
                  id="availableFromDate"
                  className="form-control mt-2"
                  value={course?.startDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col" id="wd-available-until">
              <label htmlFor="availableUntilDate" className="form-label mt-2">
                <b>Until</b>
              </label>
              <div>
                <input
                  type="date"
                  id="availableUntilDate"
                  className="form-control mt-2"
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Save and Cancel Buttons */}
      <button
        type="button"
        className="btn btn-danger float-end ms-1"
        onClick={handleSave}
      >
        Save
      </button>
      <button
        className="btn btn-secondary float-end ms-1"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
}
