/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Summary = ({ incomeList, expenseList, budgetList, range }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  /* Filter Data------------------------------>> */
  const fromDate = range.fromDate ? new Date(range.fromDate) : null;
  const toDate = range.toDate ? new Date(range.toDate) : null;

  /* Filter Income List-------------- */
  const filteredincomeList = incomeList.filter(item => {
      const itemDate = new Date(item.date); 
      return (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);
  });
  
  /* Filter Expense List-------------- */
  const filteredexpenseList = expenseList.filter(item => {
      const itemDate = new Date(item.date); 
      return (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);
  });

  /* Filter Budget List-------------- */
  /* const filteredbudgetList = budgetList.filter(item => {
      const itemDate = new Date(item.date); 
      return (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);
  }); */
  
  /* Filter Data End------------------------------>> */

  // all calculation
  useEffect(() => {
    let budgetSum = 0;
    let incomeSum = 0;
    let expenseSum = 0;

    // budget sum
    budgetList.forEach((item) => {
      budgetSum += parseInt(Number(item.amount));
    });
    setTotalBudget(budgetSum);

    // income sum
    filteredincomeList.forEach((item) => {
      incomeSum += parseInt(Number(item.amount));
    });
    setTotalIncome(incomeSum);

    // expense sum
    filteredexpenseList.forEach((item) => {
      expenseSum += parseInt(Number(item.amount));
    });
    setTotalExpense(expenseSum);
    
  }, [budgetList, filteredincomeList, filteredexpenseList]);

  return (
    <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-3">
      <div className="container">
        <div className="grid grid-cols-2 gap-3">
          <Link to={"/dashboard/budget"}>
            <SingleCard
              CardTitle="Budget"
              titleHref="/#"
              btnHref="/#"
              CardDescription={Number(totalBudget)}
            />
          </Link>
          <Link to={"/dashboard/income"}>
            <SingleCard
              CardTitle="Income"
              titleHref="/#"
              btnHref="/#"
              CardDescription={Number(totalIncome)}
            />
          </Link>

          <Link to={"/dashboard/expense"}>
            <SingleCard
              CardTitle="Expense"
              titleHref="/#"
              btnHref="/#"
              color={Number(totalExpense) > Number(totalIncome) ? "text-red-400" : ""}
              CardDescription={Number(totalExpense)}
            />
          </Link>

          <SingleCard
            CardTitle="Balance"
            titleHref="/#"
            btnHref="/#"
            color={Number(totalIncome) - Number(totalExpense) < 0 ? "text-red-400": ""}
            CardDescription={Number(totalIncome) - Number(totalExpense)}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;

const SingleCard = ({ image, CardDescription, CardTitle, color }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img src={image} alt="" className="w-full" />
      <div className="p-5 text-left sm:p-2 md:p-2 xl:p-9">
        <h3>
          <p className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {CardTitle}
          </p>
        </h3>
        <p className={`text-base leading-relaxed ${color ? `${color}` : "text-body-color dark:text-dark-6"}`}>
          {CardDescription} Taka
        </p>
      </div>
    </div>
  );
};
