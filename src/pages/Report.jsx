import SelectedDate from "../component/SelectedDate";
import ReportTable from "./ReportTable";
import { useSelector } from "react-redux";
const Report = () => {
  const incomeList = useSelector((state) => state.personalBanking.addIncome);
  const expenseList = useSelector((state) => state.personalBanking.addExpense);
  return (
    <div>
      
      <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
            <h1>Banking Report</h1>
          </div>
        </div>
      </section>
      <SelectedDate incomeList={incomeList} expenseList={expenseList}/>
      <ReportTable incomeList={incomeList} expenseList={expenseList} />
      {/*  <ReportChart /> */}
    </div>
  );
};

export default Report;
