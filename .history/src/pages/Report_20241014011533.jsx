/* eslint-disable react/prop-types */
import { CalendarDays } from "lucide-react";
import SelectedDate from "../component/SelectedDate";
import ReportTable from "./ReportTable";
import { useSelector } from "react-redux";
import { useState } from "react";
const Report = () => {
  const incomeList = useSelector((state) => state.personalBanking.addIncome);
  const expenseList = useSelector((state) => state.personalBanking.addExpense);
  const [date, setDate] = useState("");

  const mergedList = [
    ...incomeList.map((item) => ({ ...item, type: "Income" })),
    ...expenseList.map((item) => ({ ...item, type: "Expense" })),
  ];

  const sortedList = mergedList.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );


  return (
    <div>
      <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
            <h1>Banking Report</h1>
          </div>
        </div>
      </section>
      <div className="mt-20 container">
        <label className="text-white mb-5" htmlFor="form">From</label>
        <div>
          <DateInputBox required={true} datedata={setDate} />
        </div>
      </div>
      <div className="mt-20">
        {/*    <ReportTable tabledata={sortedList} /> */}
      </div>
      {/*  <ReportChart /> */}
    </div>
  );
};

export default Report;

const DateInputBox = ({ datedata, required }) => {

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue); // Converts the date to dd/mm/yyyy format
    datedata(dateValue.split("-").reverse().join("/"));
  };

  return (
    <>
      <div className="w-full mb-3 dateinputcontainer">
        <label htmlFor="dateinput" className="w-full">
          <input
            className="opacity-0 dateinput"
            required={required}
            type="date"
            name="dateinput"
            id="dateinput"
            onChange={handleDateChange}
          />
          <div className="rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 flex items-center gap-2">
            <CalendarDays size={15} />
            {selectedDate ? selectedDate : "dd / mm / yyyy"}
          </div>
        </label>
      </div>
    </>
  );
};
