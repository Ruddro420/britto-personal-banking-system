/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AddModal from "./AddModal";


const BottomNav = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const trigger = useRef(null);
    const modal = useRef(null);

    // Close on click outside
    useEffect(() => {
        const clickHandler = (event) => {
            if (!modal.current) return;
            if (
                !modalOpen ||
                modal.current.contains(event.target) || // Click inside modal
                (trigger && trigger.current.contains(event.target)) // Click on the trigger
            ) {
                return;
            }
            setModalOpen(false);
        };

        document.addEventListener("click", clickHandler);

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, [modalOpen, trigger, setModalOpen]);

    // Close if the ESC key is pressed
    useEffect(() => {
        const keyHandler = (event) => {
            if (!modalOpen || event.keyCode !== 27) return;
            setModalOpen(false);
        };

        document.addEventListener("keydown", keyHandler);

        return () => {
            document.removeEventListener("keydown", keyHandler);
        };
    }, [modalOpen, setModalOpen]);
    return (
        <>
           <div className="container mx-auto py-10">
                <div
                    className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? "block" : "hidden"
                        }`}
                >
                    <div
                        ref={modal}
                        className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                    >
                        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                            Select Your Options
                        </h3>
                        <span
                            className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"
                        ></span>
                        <div className="grid grid-cols-2 gap-3">
                            <SingleCard
                                CardTitle="Income"
                                titleHref="/dashboard/income"
                                btnHref="/dashboard/income"
                            />
                            <SingleCard
                                CardTitle="Expense"
                                titleHref="/#"
                                btnHref="/#"
                            />
                            <SingleCard
                                CardTitle="Category"
                                titleHref="/#"
                                btnHref="/#"
                            />
                        </div>
                        <div className="-mx-3 flex flex-wrap mt-4">
                            <div className="w-full px-3">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                    <div className="w-full">
                        <div className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                            <button type="button" className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                                Today
                            </button>
                            <button type="button" className="px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg">
                                Month
                            </button>
                            <button type="button" className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                                Year
                            </button>
                        </div>
                    </div>
                    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                        <Link to='/dashboard' data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="text-sm dark:text-gray-400">Home</span>
                        </Link>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
                            </svg>
                            <span className="text-sm dark:text-gray-400">Report</span>
                        </button>
                        <div id="tooltip-bookmark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Bookmark
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button ref={trigger}
                            onClick={() => setModalOpen(true)} data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                            <span className="text-sm dark:text-gray-400">Add</span>
                        </button>
                        <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            New post 
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="text-sm dark:text-gray-400">Search</span>
                        </button>
                        <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Search
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <Link to='/dashboard/settings' data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                            </svg>
                            <span className="text-sm dark:text-gray-400">Settings</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomNav;


const SingleCard = ({
    image,
    CardTitle,
    titleHref
}) => {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-white dark:shadow-card dark:hover:shadow-3">
            <img src={image} alt="" className="w-full" />
            <Link to={titleHref} className="p-5 text-left sm:p-2 md:p-2 xl:p-9">
                <h3>
                    <p
                        className="text-center block text-xl font-semibold text-dark hover:text-primary dark:text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        {CardTitle}
                    </p>
                </h3>
            </Link>
        </div>
    );
};