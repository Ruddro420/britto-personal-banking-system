/* eslint-disable react/no-children-prop */
import { ChevronLeft, ChevronRight, FileSpreadsheet } from "lucide-react";
import { useState } from "react";
import * as XLSX from "xlsx";
/* eslint-disable react/prop-types */

const ReportTable = ({ tabledata, type }) => {


  /* Pagination------------------------->>> */
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = tabledata.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(tabledata.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  /* Pagination Ends Here------------------------->>> */

  /* Export to Excel Sheet------------------------>>> */
  const generateExcel = () => {
    const worksheetData = tabledata.map((income) => ({
      Purpose: income.source,
      Type: income.type,
      Amount: income.amount,
      [type ? "Month" : "Date"]:
        income.type === "Budget" ? income.month : income.date,
    }));

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    // Generate the Excel file and trigger download
    XLSX.writeFile(workbook, "Report.xlsx");
  };

  return (
    <div style={{ marginTop: "-110px", paddingBottom: "60px" }}>
      <div className="relative overflow-x-auto shadow-md rounded-md mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 ">
          <thead className="text-xs dark:text-white uppercase dark:bg-gray-500 bg-gray-300 text-black text-center rounded-t-md">
            <tr>
              <th scope="col" className="px-3 py-3 ">
                Purpose
              </th>
              <th scope="col" className="px-3 py-3">
                Amount
              </th>
              <th scope="col" className="px-3 py-3">
                {type ? "Month" : "Date"}
              </th>
            </tr>
          </thead>

          {/* Report Data to show----------- */}
          {currentItems.length > 0 ? (
            <tbody>
              {currentItems.map((income, index) => (
                <tr
                  key={index}
                  className="dark:bg-gray-800 border-b text-black dark:text-white dark:border-gray-900 blue-400 text-center"
                >
                  <th
                    scope="row"
                    style={{ wordWrap: "break-word" }}
                    className="px-2 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white  max-w-20"
                  >
                    <Tooltip
                      text={
                        <>
                          <div className="flex flex-col">
                            {income.source}
                            <span
                              className={`${
                                income.type === "Expense"
                                  ? "text-red-500"
                                  : "text-green"
                              }`}
                            >
                              {income.type}
                            </span>
                          </div>
                        </>
                      }
                      children={income.note}
                    />
                  </th>
                  <td
                    style={{ wordWrap: "break-word" }}
                    className="px-2 py-4 dark:bg-gray-700 max-w-16"
                  >
                    {income.amount}
                  </td>
                  <td className="px-2 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white">
                    {income.type === "Budget" ? income.month : income.date}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className=" text-center">
              <td
                colSpan="3"
                className="px-6 py-4 text-center font-bold text-lg"
              >
                No Transaction available
              </td>
            </tr>
          )}
        </table>

        {/* Pagination------------ */}
        <div className="dark:text-white flex justify-center items-center gap-4 p-2 mt-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`${currentPage == 1 ? "dark:text-gray-600":""}`}
          >
            <ChevronLeft />
          </button>
          <span>{`${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${currentPage == totalPages ? "dark:text-gray-600":""}`}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="dark:text-white flex justify-end p-2 gap-1 mt-1">
          {/* Generate Report Sheet----------- */}
          <button
            onClick={generateExcel}
            className="flex gap-1 border p-1 rounded dark:bg-gray-800"
          >
            <FileSpreadsheet />
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {text}
      {isVisible && (
        <div>
          <div className="absolute max-w-44 bottom-[40px] ml-2 transform -translate-x-1/2 dark:bg-gray-700 bg-gray-200 py-2 px-4 rounded-md border-transparent border-t-gray-800">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
