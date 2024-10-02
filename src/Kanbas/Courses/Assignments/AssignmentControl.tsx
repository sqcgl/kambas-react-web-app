import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControl() {
  return (
    <div>
      <div className="d-flex">
        <div className="input-group float-start col">
          <span className="input-group-text bg-white">
            <CiSearch />
          </span>
          <input
            className="border-start-0 border rounded-start-0 rounded"
            type="search"
            placeholder="search..."
            id="wd-search-assignment"
          />
        </div>
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assigment
        </button>
        <button
          id="wd-group-assignment-btn"
          className="btn btn-lg btn-secondary me-1"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>
    </div>
  );
}
