import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import AddModal from "./AddModal";
import { WalletMinimal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setDateRange } from "../redux/productSlice";

// Helper to format date as 'YYYY-MM-DD'
const formatDate = (date) => date.toISOString().split("T")[0];

const BottomNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const dispatch = useDispatch();
  

  const dateRange = useSelector((state) => state.personalBanking.range);
  console.log(dateRange.fromDate)


  const [fromDate, setFromDate] = useState(
    localStorage.getItem("fromDate") || ""
  );
  const [toDate, setToDate] = useState(localStorage.getItem("toDate") || "");

  const handleDateRangeChange = (srange) => {
    const today = new Date();
    let from, to;

    if (srange === "Today") {
      from = to = formatDate(today);
    } else if (srange === "Month") {
      from = formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
      to = formatDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
    } else if (srange === "Year") {
      from = formatDate(new Date(today.getFullYear(), 0, 1));
      to = formatDate(new Date(today.getFullYear(), 11, 31));
    }

    setFromDate(from);
    setToDate(to);
    dispatch(setDateRange({ fromDate: from, toDate: to, range: srange }));
  };
  console.log("Range Selector", fromDate, toDate )
  return (
    <>
      <AddModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        trigger={trigger}
      />
      <div>
        <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          {/* Range Selector */}
          <div className="w-full">
            <div
              className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
              role="group"
            >
              <button
                type="button"
                onClick={() => handleDateRangeChange("Today")}
                className={`px-5 py-1.5 text-xs font-medium  rounded-lg ${dateRange.range==="Today" ? "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900":"text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"}`}
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => handleDateRangeChange("Month")}
                className={`px-5 py-1.5 text-xs font-medium  rounded-lg ${dateRange.range==="Month" ? "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900":"text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"}`}
              >
                Month
              </button>
              <button
                type="button"
                onClick={() => handleDateRangeChange("Year")}
                className={`px-5 py-1.5 text-xs font-medium  rounded-lg ${dateRange.range==="Year" ? "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900":"text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"}`}
              >
                Year
              </button>
            </div>
          </div>

          {/* Bottom Navigation Links */}
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <Link
              to="/dashboard"
              data-tooltip-target="tooltip-home"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="text-sm dark:text-gray-400">Home</span>
            </Link>

            {/* Other Links */}
            <Link
              to="/dashboard/report"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20"
              >
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
              </svg>
              <span className="text-sm dark:text-gray-400">Report</span>
            </Link>

            <button
              ref={trigger}
              onClick={() => setModalOpen(true)}
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              <span className="text-sm dark:text-gray-400">Add</span>
            </button>

            <Link
              to="/dashboard/budget"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <WalletMinimal className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-sm dark:text-gray-400">Budget</span>
            </Link>

            <Link
              to="/dashboard/settings"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                />
              </svg>
              <span className="text-sm dark:text-gray-400">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
