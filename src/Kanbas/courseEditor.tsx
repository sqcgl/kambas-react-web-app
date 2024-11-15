import { courses } from "./Database";

export default function CourseEditor() {
  return (
    <div id="wd-show-courses">
      <div>
        <div>
          <div>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Courses
            </h1>
          </div>
          <div>
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
