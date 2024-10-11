/* eslint-disable react/prop-types */
import {  useDispatch } from "react-redux";
import { addIncomeData } from "../redux/productSlice";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import SelectedCal from "../component/SelectedCal";
import ReportTable from "./ReportTable";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();


  const addIncome = (e) => {
    e.preventDefault();
    dispatch(
      addIncomeData({
        source: source,
        amount: amount,
        date: date,
        note: note,
      })
    );
    setSource('')
    setAmount('')
    setDate('')
    setNote('')
  };

  return (
    <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10 mb-5">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
          <h1>Add Income</h1>
        </div>
      </div>


      <section className="z-10 overflow-hidden bg-white lg:py-[120px] mt-6">
        <div className="">
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
                  />
                  <ContactInputBox
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    data={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                  <DateInputBox datedata={setDate} />
                  <ContactTextArea
                    row="3"
                    placeholder="Note"
                    name="note"
                    data={(e) => setNote(e.target.value)}
                    value={note}
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
        </div>
      </section>
      <ReportTable />
    </section>
  );
};

export default Income;

const ContactInputBox = ({ type, placeholder, name, data, value }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={data}
        value={value}
        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      />
    </div>
  );
};

const DateInputBox = ({ datedata }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue.split("-").reverse().join("/")); // Converts the date to dd/mm/yyyy format
    datedata(dateValue.split("-").reverse().join("/"));
  };
  return (
    <>
      <div className="w-full mb-3 -mt-3 dateinputcontainer">
        <label htmlFor="dateinput" className="w-full">
          <input
            className="opacity-0 dateinput"
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

const ContactTextArea = ({ row, placeholder, name, data, value }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        onChange={data}
        value={value}
      />
    </div>
  );
};
