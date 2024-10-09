/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AddModal = ({ setModalOpen, modalOpen, trigger }) => {
    const modal = useRef(null);

    // Close modal on click outside
    useEffect(() => {
        const clickHandler = (event) => {
            if (!modal.current) return;

            if (
                modalOpen &&
                !modal.current.contains(event.target) &&
                (!trigger || !trigger.current.contains(event.target))
            ) {
                setModalOpen(false);
            }
        };

        document.addEventListener("click", clickHandler);

        return () => {
            document.removeEventListener("click", clickHandler);
        };
    }, [modalOpen, trigger, setModalOpen]);

    // Close modal if the ESC key is pressed
    useEffect(() => {
        const keyHandler = (event) => {
            if (modalOpen && event.keyCode === 27) {
                setModalOpen(false);
            }
        };

        document.addEventListener("keydown", keyHandler);

        return () => {
            document.removeEventListener("keydown", keyHandler);
        };
    }, [modalOpen, setModalOpen]);

    return (
        <div className="container mx-auto py-10">
            <div
                className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? "block" : "hidden"}`}
            >
                <div
                    ref={modal}
                    className="w-full max-w-[570px] rounded-[0px] bg-white px-8 py-8 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                >
                    <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                        Select Your Options
                    </h3>
                    <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>
                    <div className="grid grid-cols-2 gap-3">
                        <SingleCard
                            CardTitle="Income"
                            titleHref="/dashboard/income"
                            setModalOpen={setModalOpen} // Pass down setModalOpen
                        />
                        <SingleCard
                            CardTitle="Expense"
                            titleHref="/dashboard/expense"
                            setModalOpen={setModalOpen} // Pass down setModalOpen
                        />
                     {/*    <SingleCard
                            CardTitle="Category"
                            titleHref="/dashboard/category"
                            setModalOpen={setModalOpen} 
                        /> */}
                    </div>
                    <div className="-mx-3 flex flex-wrap mt-4">
                        <div className="w-full px-3">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="block w-full rounded border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
const SingleCard = ({ image, CardTitle, titleHref, setModalOpen }) => {
    const handleClick = () => {
        setModalOpen(false); // Close the modal when a card is clicked
    };

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-white dark:shadow-card dark:hover:shadow-3">
            <img src={image} alt="" className="w-full" />
            <Link
                to={titleHref}
                onClick={handleClick} // Close modal on link click
                className="p-5 text-left sm:p-2 md:p-2 xl:p-9"
            >
                <h3>
                    <p className="text-center block text-xl font-semibold text-dark hover:text-primary dark:text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        {CardTitle}
                    </p>
                </h3>
            </Link>
        </div>
    );
};
