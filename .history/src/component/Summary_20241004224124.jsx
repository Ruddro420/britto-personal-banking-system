/* eslint-disable react/prop-types */


const Summary = () => {
    return (
        <>
            <section className="bg-gray-2 pt-25 dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8">
                        <SingleCard
                            CardTitle="Budget"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="100 Taka"
                        />
                        <SingleCard
                            CardTitle="Income"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="100 Taka"
                        />
                        <SingleCard
                            CardTitle="Expense"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="100 Taka"
                        />
                        <SingleCard
                            CardTitle="Balance"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="100 Taka"
                        />
                    </div>
                </div>
            </section>

        </>
    );
};

export default Summary;

const SingleCard = ({
    image,
    CardDescription,
    CardTitle,
}) => {
    return (
        <>
            {/*  */}
            <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                <img src={image} alt="" className="w-full" />
                <div className="p-5 text-left sm:p-2 md:p-2 xl:p-9">
                    <h3>
                        <p
                            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
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
