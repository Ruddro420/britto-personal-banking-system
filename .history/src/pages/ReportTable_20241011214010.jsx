import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../redux/productSlice";

/* eslint-disable react/prop-types */
const ReportTable = () => {
  const incomeList = useSelector((state) => state.personalBanking.addIncome);
  const expenseList = useSelector((state) => state.personalBanking.addExpense);
  // dispatch
  const dispatch = useDispatch()
  const mergedList = [
    ...incomeList.map((item) => ({ ...item, type: "Income" })),
    // ...expenseList.map((item) => ({ ...item, type: "Expense" })),
  ];

  const sortedList = mergedList.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  /* Delete Function */
  const deleteHandler = (e) => {

  }
  return (
    <div style={{ marginTop: "-110px", paddingBottom: "60px" }}>
      <div className="relative overflow-x-auto shadow-md rounded-b-md mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-xs dark:text-white uppercase dark:bg-gray-500 bg-gray-300 text-black">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Purpose
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {/* Report Data to show----------- */}
          {sortedList.length > 0 ? (
            <tbody>
              {sortedList.map((income, index) => (
                <tr
                  key={index}
                  className="dark:bg-gray-700 border-b text-black dark:text-white dark:border-gray-900 blue-400 text-center"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white flex flex-col"
                  >
                    {income.source}
                    <span
                      className={`${income.type === "Income" ? "text-green" : "text-red-500"
                        }`}
                    >
                      {income.type}
                    </span>
                  </th>
                  <td className="px-6 py-4">{income.amount}</td>
                  <td className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white">
                    {income.date}
                  </td>
                  <td onClick={() => dispatch(deleteData({
                    id: income.index
                  }))} className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white">
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className=" text-center">
              <td colSpan="3" className="px-6 py-4 text-center font-bold text-lg">
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
