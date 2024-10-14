/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addIncomeData } from "../redux/productSlice";
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import DataTable from "./DataTable";

const Income = () => {
  const dispatch = useDispatch();

  // State from Redux store
  const incomeList = useSelector((state) => state.personalBanking.addIncome);

  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  // Generate random number for unique ID
  const randomNumber = () => Math.floor(Math.random() * 10000000) + 1;

  // Add new income entry
  const addIncome = (e) => {
    e.preventDefault();
    dispatch(
      addIncomeData({
        id: randomNumber(),
        source,
        amount,
        date,
        note,
      })
    );
    setSource("");
    setAmount("");
    setDate("");
    setNote("");
  };

  // Merge income and expense lists with type
  const mergedList = [
    ...incomeList.map((item) => ({ ...item, type: "Income" })),
    // ...expenseList.map((item) => ({ ...item, type: "Expense" })),
  ];

  /* ======================Filter====================== */
  const [filteredList, setFilteredList] = useState([]);
  const dateRange = useSelector((state) => state.personalBanking.range);
  // Filter data based on the date range
  useEffect(() => {
    const fromDate = new Date(dateRange.fromDate);
    const toDate = new Date(dateRange.toDate);

    const newFilteredList = mergedList.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= fromDate && itemDate <= toDate;
    });

    setFilteredList(newFilteredList);/* .length > 0 ? newFilteredList : mergedList */
  }, [dateRange, incomeList]);

  return (
    <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10 mb-5">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
          <h1>Add Income</h1>
        </div>
      </div>

      <section className="z-10 overflow-hidden bg-white lg:py-[120px] mt-6 mb-[130px]">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
              <form onSubmit={addIncome}>
                <ContactInputBox
                  type="text"
                  name="incomeSource"
                  placeholder="Income Source"
                  data={(e) => setSource(e.target.value)}
                  value={source}
                  required={true}
                />
                <ContactInputBox
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  data={(e) => setAmount(e.target.value)}
                  value={amount}
                  required={true}
                />
                <DateInputBox required={true} datedata={setDate} />
                <ContactTextArea
                  row="3"
                  placeholder="Note"
                  name="note"
                  data={(e) => setNote(e.target.value)}
                  value={note}
                  required={true}
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    Add Income
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div>
        <DataTable tabledata={filteredList} />
      </div>
    </section>
  );
};

export default Income;

// Reusable Input Component
const ContactInputBox = ({ type, placeholder, name, data, value, required }) => (
  <div className="mb-3">
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      name={name}
      onChange={data}
      value={value}
      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
    />
  </div>
);

// Date Input Component
const DateInputBox = ({ datedata, required }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue.split("-").reverse().join("/"));
    datedata(dateValue);
  };

  return (
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
          {selectedDate || "dd / mm / yyyy"}
        </div>
      </label>
    </div>
  );
};

// Reusable TextArea Component
const ContactTextArea = ({ row, placeholder, name, data, value, required }) => (
  <div className="mb-6">
    <textarea
      rows={row}
      placeholder={placeholder}
      required={required}
      name={name}
      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      onChange={data}
      value={value}
    />
  </div>
);
