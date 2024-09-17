export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3><label htmlFor="wd-name">Assignment Name</label></h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows={10} cols={40}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignments Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="assignments">Assignemts</option>
                    <option value="quizzes">Quizzes</option>
                    <option value="exams">Exams</option>
                    <option value="project">Project</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="percentage">Percentage</option>
                    <option value="decimal">Decimal</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submisstion Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="online">Online</option>
                </select><br /><br />
                <label>Online Entry Options</label><br />
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" id="wd-website-ur" />
                <label htmlFor="wd-website-ur">Website URL</label><br />
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>

                <label>Assign to</label><br />
                <input id="wd-assign-to" placeholder="Everyone"/><br /><br />

                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" id="wd-due-date" value="2024-05-13"/><br /><br />
                
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label><br />
                  <input type="date" id="wd-available-from" value="2024-05-06"/>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label><br />
                  <input type="date" id="wd-available-until" value="2024-05-20"/>
                </td>
              </tr>
            </td>
          </tr>
        </table>
        <hr></hr>
        <table align="right">
          <tr>
            <td>
              <button>Cancel</button>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}
  