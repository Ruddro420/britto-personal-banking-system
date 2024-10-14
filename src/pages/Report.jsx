/* eslint-disable react/prop-types */

import { CalendarDays } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReportTable from "./ReportTable";

const Report = () => {
  
  const incomeList = useSelector((state) => state.personalBanking.addIncome);
  const expenseList = useSelector((state) => state.personalBanking.addExpense);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const mergedList = [
    ...incomeList.map((item) => ({ ...item, type: "Income" })),
    ...expenseList.map((item) => ({ ...item, type: "Expense" })),
  ];

  /* Filter Data by Date Range------------------------------------->>> */

  const filterByDate = (list, startDate, endDate) => {
    if (!startDate || !endDate) return list;

    const fromDateMs = new Date(startDate).getTime();
    const toDateMs = new Date(endDate).getTime();

    return list.filter((item) => {
      const itemDateMs = new Date(item.date).getTime();
      return itemDateMs >= fromDateMs && itemDateMs <= toDateMs;
    });
  };
/* Filter Data by Date Range------------------------------------->>> */

  // Handle form submission to filter the report
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredList = filterByDate(mergedList, fromDate, toDate);
    setFilteredData(filteredList);
  };

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
          <form onSubmit={handleSearch}>
            <div className="flex gap-4 pt-8">
              <DateInputBox
                required={true}
                datedata={setFromDate}
                value={fromDate}
                name="fromDate"
              />
              <DateInputBox
                required={true}
                datedata={setToDate}
                value={toDate}
                name="toDate"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
              >
                Search Report
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-32">
        <ReportTable tabledata={filteredData.length > 0 ? filteredData : mergedList} />
      </div>
    </div>
  );
};

export default Report;

const DateInputBox = ({ datedata, required, value, name }) => {
  const [selectedDate, setSelectedDate] = useState(value || "");

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue); // Update local state
    datedata(dateValue); // Update parent state
  };

  // Update local selectedDate if the parent value changes
  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  return (
    <div className="w-full mb-3 reportdateinputcontainer">
      <label htmlFor={name} className="w-full dark:bg-dark">
        <input
          className="opacity-0 reportdateinput text-black"
          required={required}
          value={selectedDate}
          type="date"
          name={name}
          id={name}
          onChange={handleDateChange}
        />
        <div className="rounded border border-stroke pl-[6px] pr-[2px] py-3 text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 flex items-center gap-2 text-base">
          <CalendarDays size={15} />
          {selectedDate ? selectedDate : "dd / mm / yyyy"}
        </div>
      </label>
    </div>
  );
};
