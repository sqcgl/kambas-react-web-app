import { courses } from "./Database";

export default function CourseEditor() {
  return (
    <div
      id="wd-show-courses-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Courses
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul>
              {courses.map((course) => (
                <li key={course._id}>{course.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
