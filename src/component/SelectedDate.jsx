/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import SelectedCal from "./SelectedCal";
import DataTable from "../pages/DataTable";

export default function SelectedDate({ incomeList, expenseList, range }) {
    console.log("From Date:", range.fromDate);
    console.log("To Date  :", range.toDate);

    /* Table Data------------- */
    const tableincomeList = useSelector((state) => state.personalBanking.addIncome);
    const tableexpenseList = useSelector((state) => state.personalBanking.addExpense);

    // Merging income and expense lists with type
    const mergedList = [
        ...tableincomeList.map((item) => ({ ...item, type: "Income" })),
        ...tableexpenseList.map((item) => ({ ...item, type: "Expense" })),
    ];

    /* Income and Expense--------------- */
    const totalIncome = incomeList.reduce((acc, income) => acc + Number(income.amount), 0);
    const totalExpense = expenseList.reduce((acc, expense) => acc + Number(expense.amount), 0);


    /* Filter Data------------------------------>> */
    const fromDate = new Date(range.fromDate);
    const toDate = new Date(range.toDate);

    const filteredList = mergedList.filter(item => {
        const itemDate = new Date(item.date); 
        return itemDate >= fromDate && itemDate <= toDate;
    });

    /* Filter Data End------------------------------>> */

    return (
        <div className="flex flex-col gap-6">
            <SelectedCal income={totalIncome} expense={totalExpense} />
            <DataTable tabledata={filteredList.length > 0 ? filteredList : mergedList} />
        </div>
    );
}
