/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import DatePicker from "../component/DatePicker";
import { addIncomeData } from "../redux/productSlice";
import { useState } from "react";

const Income = () => {
    const [source, setSource] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')

    const dispatch = useDispatch();

    const addIncome = (e) => {
        e.preventDefault();
        dispatch(addIncomeData({
            source: source,
            amount: amount,
            date: date,
            note: note,
        }))
    }
    function convertToText(input) {
        if (!input.value) {
            input.type = 'text';  // Reset to placeholder if no date is selected
        } else {
            const selectedDate = new Date(input.value);
            input.type = 'text';
            input.value = selectedDate.toISOString().substring(0, 10);  // Format date as YYYY-MM-DD
        }
    }
    return (
        <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10 mb-5">
            <div className="container">
                <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
                    <h1>Add Income</h1>
                </div>
            </div>
            <section className=" z-10 overflow-hidden bg-white lg:py-[120px] mt-6">
                <div className="">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className=" bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
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

<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>



                                    <DatePicker />

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
        </section>
    );
};

export default Income;

const ContactInputBox = ({ type, placeholder, name, data, value }) => {
    return (
        <>
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
        </>
    );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue, data, value }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                    onChange={data}
                    value={value}
                />
            </div>
        </>
    );
};