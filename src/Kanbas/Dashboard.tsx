import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <br />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <br />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 cow-cols-md-5 g-4">
          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5200 DBMS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Database Management
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1000 Python
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Learning Python
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS3000 Java
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Learning Java
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS4000 C
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Learning C
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-couse col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS6000 C++
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Learning C++
                    </p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
