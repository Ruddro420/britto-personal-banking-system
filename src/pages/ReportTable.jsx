import { useDispatch } from "react-redux";
import { deleteData } from "../redux/productSlice";
import { Trash2 } from "lucide-react";

/* eslint-disable react/prop-types */
const ReportTable = ({ tabledata, type }) => {
  const dispatch = useDispatch();

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
              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>

          {/* Report Data to show----------- */}
          {tabledata.length > 0 ? (
            <tbody>
              {tabledata.map((income, index) => (
                <tr
                  key={index}
                  className="dark:bg-gray-800 border-b text-black dark:text-white dark:border-gray-900 blue-400 text-center"
                >
                  <th
                    scope="row"
                    style={{ wordWrap:"break-word" }}
                    className="px-2 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white flex flex-col max-w-20"
                  >
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
                  </th>
                  <td style={{ wordWrap:"break-word" }} className="px-2 py-4 dark:bg-gray-700 max-w-16">{income.amount}</td>
                  <td className="px-2 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white">
                    {income.type === "Budget" ? income.month : income.date}
                  </td>
                    
                    <td className="pr-4 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white ">
                    <button
                      onClick={() =>
                        dispatch(
                          deleteData({
                            id: income.id,
                          })
                        )
                      }
                      className="userButton rounded cursor-pointer"
                    >
                      <Trash2 className="text-red-500" size={20}/>

                      
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className=" text-center">
              <td
                colSpan="4"
                className="px-6 py-4 text-center font-bold text-lg"
              >
                No Transaction available
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
