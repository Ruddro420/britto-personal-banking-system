/* eslint-disable react/prop-types */

const Income = () => {
    return (
        <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-5">
            <div className="container">
                <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
                    <h1>Add Income</h1>
                </div>
            </div>
            <div className="container">
                <>
                    <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                        <div className="container">
                            <div className="-mx-4 flex flex-wrap lg:justify-between">
                                <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                                    <div className="mb-12 max-w-[570px] lg:mb-0">
                                        <span className="mb-4 block text-base font-semibold text-primary">
                                            Contact Us
                                        </span>
                                        <div className="mb-8 flex w-full max-w-[370px]">
                                            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                                <svg
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="w-full">
                                                <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                                    Email Address
                                                </h4>
                                                <p className="text-base text-body-color dark:text-dark-6">
                                                    info@yourdomain.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                    <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                        <form>
                                            <ContactInputBox
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                            />
                                            <ContactInputBox
                                                type="text"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                            <ContactInputBox
                                                type="text"
                                                name="phone"
                                                placeholder="Your Phone"
                                            />
                                            <ContactTextArea
                                                row="6"
                                                placeholder="Your Message"
                                                name="details"
                                                defaultValue=""
                                            />
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </div>
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