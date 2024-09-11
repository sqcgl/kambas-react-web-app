import {Link} from "react-router-dom";
export default function Dashboard() {
    return(
        <div id = "wd-dashboard">
            <h1 id = "wd-dashboard-title">Dashboard</h1><br />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2><br />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5200/Home">
                            CS5200 DBMS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Database Management
                        </p>
                        <Link to="/Kanbas/Courses/5200/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1111/Home">
                            CS1111 Python
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Python
                        </p>
                        <Link to="/Kanbas/Courses/1111/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2222/Home">
                            CS2222 C
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Programing in C
                        </p>
                        <Link to="/Kanbas/Courses/2222/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3333/Home">
                            CS3333 C++
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Programing in C++
                        </p>
                        <Link to="/Kanbas/Courses/3333/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4444/Home">
                            CS4444 Java
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Programing in Java
                        </p>
                        <Link to="/Kanbas/Courses/4444/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-couse">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5555/Home">
                            CS5555 Algorithms
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Learning Algorithms
                        </p>
                        <Link to="/Kanbas/Courses/5555/Home">Go</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}