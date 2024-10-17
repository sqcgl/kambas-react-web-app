import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/neulogo.webp" width="75px" />
      </a>
      <br />
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      <br />
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard
          className={`fs-1 ${
            pathname.includes("Dashboard") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Dashboard
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Courses")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid
          className={`fs-1 ${
            pathname.includes("Courses") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Courses
      </Link>
      <br />
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Calendar")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline
          className={`fs-1 ${
            pathname.includes("Calendar") ? "text-danger" : "text-white"
          }`}
        />
        Calendar
      </Link>
      <br />
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Inbox")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaInbox
          className={`fs-1 ${
            pathname.includes("Inbox") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Inbox
      </Link>
      <br />
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 bg-black ${
          pathname.includes("Labs")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaCogSolid
          className={`fs-1 ${
            pathname.includes("Labs") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Labs
      </Link>
      <br />
    </div>
  );
}
