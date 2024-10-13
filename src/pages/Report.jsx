/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CalendarDays } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Report = () => {
  const incomeList = useSelector((state) => state.personalBanking.addIncome);
  const expenseList = useSelector((state) => state.personalBanking.addExpense);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  console.log("From: ", fromDate, "To: ", toDate);

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
      <div className="dark:bg-dark-2 pb-5 mt-[-14px]">
        <div className="container">
          <div className="flex gap-4 mt-6">
            <DateInputBox required={true} datedata={setFromDate} />
            <DateInputBox required={true} datedata={setToDate} />
          </div>
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
      <div className="w-full mb-3 reportdateinputcontainer">
        <label htmlFor="dateinput" className="w-full">
          <input
            className="opacity-0 reportdateinput text-black"
            required={required}
            type="date"
            name="dateinput"
            id="dateinput"
            onChange={handleDateChange}
          />
          <div className="rounded border border-stroke pl-[6px] pr-[2px] py-3 text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 flex items-center gap-2 text-base">
            <CalendarDays size={15} />
            {selectedDate ? selectedDate : "dd / mm / yyyy"}
          </div>
        </label>
      </div>
    </>
  );
};
