/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const AddModal = ({ setModalOpen, modalOpen, trigger }) => {
    const modal = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!modal.current) return;
            if (
                !modalOpen ||
                modal.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setModalOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <>
            <div className="container mx-auto py-20">
                <div
                    className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? "block" : "hidden"
                        }`}
                >
                    <div
                        ref={modal}
                        onFocus={() => setModalOpen(true)}
                        onBlur={() => setModalOpen(false)}
                        className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                    >
                        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                          Select Your Options
                        </h3>
                        <span
                            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
                        ></span>
                       <div className="grid grid-cols-2 gap-3">
                        <SingleCard
                            CardTitle="Income"
                            titleHref="/#"
                            btnHref="/#"
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
        </>
    );
};

export default AddModal;
const SingleCard = ({
    image,
    CardDescription,
    CardTitle,
}) => {
    return (
        <>
            {/*  */}
            <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-white dark:shadow-card dark:hover:shadow-3">
                <img src={image} alt="" className="w-full" />
                <div className="p-5 text-left sm:p-2 md:p-2 xl:p-9">
                    <h3>
                        <p
                            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </p>
                    </h3>
                    <p className=" text-base leading-relaxed text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>


                </div>
            </div>
            {/*  */}
        </>
    );
};