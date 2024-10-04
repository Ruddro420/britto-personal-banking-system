/* eslint-disable react/prop-types */

const Summary = () => {
    return (
        <>
            <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
                        <SingleCard
                            image="https://via.placeholder.com/400" // Example image URL
                            CardTitle="50+ Best creative website themes & templates"
                            titleHref="/#"
                            btnHref="/#"
                            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                        />
                        <SingleCard
                            image="https://via.placeholder.com/400"
                            CardTitle="Creative Card Component designs graphic elements"
                            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                        />
                        <SingleCard
                            image="https://via.placeholder.com/400"
                            CardTitle="The ultimate UX and UI guide to card design"
                            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
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
    titleHref,
}) => {
    return (
        <>
            <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                {image && (
                    <img src={image} alt={CardTitle} className="w-full h-auto" />
                )}
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                        <a
                            href={titleHref || "/#"}
                            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </a>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>
                </div>
            </div>
        </>
    );
};
