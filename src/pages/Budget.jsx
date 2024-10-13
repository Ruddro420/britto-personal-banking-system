/* eslint-disable react/prop-types */

import { useState } from "react";
import { addBudgetData } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { CalendarDays } from "lucide-react";
import ReportTable from "./ReportTable";

const Budget = () => {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  // generate random number
  const randomNumber = () => {
    const min = 1;
    const max = 10000000;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  };

  const addBudget = (e) => {
    e.preventDefault();
    dispatch(
      addBudgetData({
        id: randomNumber(),
        amount: amount,
        month: month,
        note: note,
      })
    );
    setAmount("");
    setMonth("");
    setNote("");
  };

  /* Display Budget---------------- */
  const budgetList = useSelector((state) => state.personalBanking.addBudget);

  const mergedList = [
    ...budgetList.map((item) => ({ ...item, type: "Budget" })),
  ];
  return (
    <section className="bg-gray-2 pt-[90px] dark:bg-gray-900 lg:pb-20 lg:pt-[120px] pb-10 mb-5">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
          <h1>Set Budget</h1>
        </div>
      </div>
      <section className="z-10 overflow-hidden bg-white lg:py-[120px] mt-6 mb-[130px]">
        <div className="">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form onSubmit={addBudget}>

                  <ContactInputBox
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    data={(e) => setAmount(e.target.value)}
                    value={amount}
                    required={true}
                  />
                  <DateInputBox monthdata={setMonth} required={true} />

                  <ContactTextArea
                    row="3"
                    placeholder="Note"
                    name="note"
                    data={(e) => setNote(e.target.value)}
                    value={note}
                    required={true}
                  />
                          git
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Set Budget
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ReportTable type={"Budget"} tabledata={mergedList} />
      </div>
    </section>
  );
};

export default Budget;

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

/* Date Input----------------- */
const DateInputBox = ({ monthdata, required }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);
    monthdata(dateValue);
  };
  return (
    <>
      <div className="w-full mb-3 -mt-3 dateinputcontainer">
        <label htmlFor="dateinput" className="w-full">
          <input
            className="opacity-0 dateinput"
            type="month"
            name="dateinput"
            id="dateinput"
            onChange={handleDateChange}
            required={required}
          />
          <div className=" rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 flex items-center gap-2">
            <CalendarDays size={15} />
            {selectedDate ? selectedDate : "mm / yyyy"}
          </div>
        </label>
      </div>
    </>
  );
};

/* text area------------- */

const ContactTextArea = ({ row, placeholder, name, data, value, required }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        onChange={data}
        value={value}
        required={required}
      />
    </div>
  );
};
