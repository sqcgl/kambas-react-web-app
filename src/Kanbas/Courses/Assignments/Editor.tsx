export default function AssignmentEditor() {
  return (
    <div className="container">
      <div className="mb-3 row" id="wd-name">
        <label htmlFor="assignmentName" className="from-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignmentName"
          value={"A1"}
        />
      </div>
      <div className="mb-3 row">
        <div className="card p-3 border">
          <p>
            The assignment is{" "}
            <span className="text-danger">available online</span>
          </p>
          <p>
            Submit a link to the landing page of your Web application running on{" "}
            <a href="https://www.netlify.com/" target="_blank">
              Netlify
            </a>
            .
          </p>

          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>
              Link to the{" "}
              <a href="#" target="_blank">
                Kanbas
              </a>{" "}
              application
            </li>
            <li>Links to all relevant source code repositories</li>
          </ul>

          <p>
            The{" "}
            <a href="#" target="_blank">
              Kanbas
            </a>{" "}
            application should include a link to navigate back to the landing
            page.
          </p>
        </div>
      </div>
      <div className="mb-3 row" id="wd-points">
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="points"
            className="form-control"
            value={"100"}
          />
        </div>
      </div>
      <div className="mb-3 row" id="wd-group">
        <label
          htmlFor="assignmentGroup"
          className="col-sm-2 col-form-label text-end"
        >
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="assignmentGroup">
            <option selected>ASSIGNMENTS</option>
            <option value="module">MODULE</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row" id="wd-display-grade-as">
        <label
          htmlFor="displayGrade"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="displayGrade">
            <option selected>Percentage</option>
            <option value="decimal">Decimal</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row" id="wd-submission-type">
        <label
          htmlFor="submissionType"
          className="col-sm-2 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-10 border rounded p-3">
          <select className="form-select" id="submissionType">
            <option selected>Online</option>
            <option value="inperson">In-person</option>
          </select>
          <div className="mt-3">
            <label htmlFor="options">
              <b>Online Entry Options</b>
            </label>
          </div>
          <div className="mt-2" id="wd-text-entry">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="options"
            />
            <label htmlFor="options" className="form-check-label">
              Text Entry
            </label>
          </div>
          <div className="mt-2" id="wd-website-url">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="options"
              checked
            />
            <label htmlFor="options" className="form-check-label">
              Website URL
            </label>
          </div>
          <div className="mt-2" id="wd-media-recordings">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="options"
            />
            <label htmlFor="options" className="form-check-label">
              Media Recordings
            </label>
          </div>
          <div className="mt-2" id="wd-student-annotation">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="options"
            />
            <label htmlFor="options" className="form-check-label">
              Student Annotation
            </label>
          </div>
          <div className="mt-2" id="wd-file-upload">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="options"
            />
            <label htmlFor="options" className="form-check-label">
              File Upload
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="assign" className="col-sm-2 col-form-label text-end">
          Assign
        </label>
        <div className="col-sm-10 border rounded p-3 mt-2" id="wd-assign-to">
          <div>
            <label htmlFor="assignTo" className="form-label mt-2">
              <b>Assign to</b>
            </label>
            <div>
              <input
                type="text"
                id="assignTo"
                className="form-control mt-2"
                value={"Everyone"}
              />
            </div>
          </div>
          <div id="wd-due-date">
            <label htmlFor="due" className="form-label mt-2">
              <b>Due</b>
            </label>
            <div>
              <input type="date" id="due" className="form-control mt-2" />
            </div>
          </div>
          <div className="row mt-2" id="wd-available-from">
            <div className="col">
              <label htmlFor="available" className="form-label mt-2">
                <b>Available from</b>
              </label>
              <div>
                <input type="date" id="due" className="form-control mt-2" />
              </div>
            </div>
            <div className="col" id="wd-available-until">
              <div className="col">
                <label htmlFor="until" className="form-label mt-2">
                  <b>Until</b>
                </label>
                <div>
                  <input type="date" id="due" className="form-control mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-danger float-end ms-1">Save</button>
      <button className="btn btn-secondary float-end ms-1">Cancel</button>
    </div>
  );
}
