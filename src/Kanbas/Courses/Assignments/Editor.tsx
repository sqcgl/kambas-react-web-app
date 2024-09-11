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
                    <option value="inperson">In-person</option>
                </select>
            </td>
          </tr>
        </table>
      </div>
  );}
  