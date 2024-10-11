/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Summary = ({ incomeList, expenseList, budgetList }) => {
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  
  // all calculation
  useEffect(() => {

    let budgetSum = 0
    let incomeSum = 0
    let expenseSum = 0
    // budget sum
    budgetList.forEach(item => {
      budgetSum += parseInt(item.amount);
    });
    setTotalBudget(budgetSum)
    // income sum
    incomeList.forEach(item => {
      incomeSum += parseInt(item.amount);
    });
    setTotalIncome(incomeSum)
    // expense sum
    expenseList.forEach(item => {
      expenseSum += parseInt(item.amount);
    });
    setTotalExpense(expenseSum)

  }, [budgetList, expenseList, incomeList])



  return (
    <>
      <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-3">
        <div className="container">
          <div className="grid grid-cols-2 gap-3">
            <SingleCard
              CardTitle="Budget"
              titleHref="/#"
              btnHref="/#"
              CardDescription={Number(totalBudget)}
            />
            <SingleCard
              CardTitle="Income"
              titleHref="/#"
              btnHref="/#"
              CardDescription={Number(totalIncome)}
            />
            <SingleCard
              CardTitle="Expense"
              titleHref="/#"
              btnHref="/#"
              color={Number(totalExpense) > Number(totalIncome) ? "text-red-400" : ""}
              CardDescription={Number(totalExpense)}
            />
            <SingleCard
              CardTitle="Balance"
              titleHref="/#"
              btnHref="/#"
              color={Number(totalIncome) - Number(totalExpense) < 0 ? "text-red-400" : ""}
              CardDescription={Number(totalIncome) - Number(totalExpense)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Summary;

const SingleCard = ({ image, CardDescription, CardTitle, color }) => {
  return (
    <>
      {/*  */}
      <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-5 text-left sm:p-2 md:p-2 xl:p-9">
          <h3>
            <p className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {CardTitle}
            </p>
          </h3>
          <p
            className={`text-base leading-relaxed  ${color ? `${color}` : "text-body-color dark:text-dark-6"}`}>

            {CardDescription} Taka
          </p>
        </div>
      </div>
      {/*  */}
    </>
  );
};
