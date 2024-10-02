import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
export default function ModuelControlButtons() {
  return (
    <div className="float-end">
      <span
        className="border border-dark p-2 m-2"
        style={{ borderRadius: "25px" }}
      >
        42% of Total
      </span>
      <FaPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
