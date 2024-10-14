/* eslint-disable react/prop-types */
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SelectedCal from "./SelectedCal";
import DataTable from "../pages/DataTable";

export default function SelectedDate({ incomeList, expenseList }) {

  // const dispatch = useDispatch();

  /* Table Data--------------- */
  /* Income Table Data------------- */
  
  const tableincomeList = useSelector((state) => state.personalBanking.addIncome);
  const tableexpenseList = useSelector((state) => state.personalBanking.addExpense);
  const mergedList = [
    ...tableincomeList.map((item) => ({ ...item, type: "Income" })),
    ...tableexpenseList.map((item) => ({ ...item, type: "Expense" })),
  ];


  /* Total Income and Expense--------------- */
  const totalIncome = incomeList.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenseList.reduce((acc, expense) => acc + expense.amount, 0);
  
  return (
    <div className="flex flex-col gap-6">
    <SelectedCal income={totalIncome} expense={totalExpense}/>
    <DataTable tabledata={mergedList}/>
    </div>
  );
}
