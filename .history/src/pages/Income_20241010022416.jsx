/* eslint-disable react/prop-types */

import DatePicker from "../component/DatePicker";

const Income = () => {
    return (
        <section style={{height:'100vh'}} className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10 mb-5">
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
                                <form>
                                    <ContactInputBox
                                        type="text"
                                        name="incomeSource"
                                        placeholder="Income Source"
                                    />
                                    <ContactInputBox
                                        type="number"
                                        name="amount"
                                        placeholder="Amount"
                                    />
                                    <DatePicker/>
                                    
                                    <ContactTextArea
                                        row="3"
                                        placeholder="Note"
                                        name="details"
                                        defaultValue=""
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

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};