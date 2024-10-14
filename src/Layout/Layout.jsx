import SelectedDate from "../component/SelectedDate";
import Summary from "../component/Summary";
// import { addIncomeData } from "../redux/productSlice";
import { useSelector } from "react-redux";

const Layout = () => {
    const incomeList = useSelector((state) => state.personalBanking.addIncome);
    const expenseList = useSelector((state) => state.personalBanking.addExpense);
    const budgetList = useSelector((state) => state.personalBanking.addBudget);
    
    const dateRange = useSelector((state) => state.personalBanking.range);

    

    return (
        <div>
            <Summary range={dateRange} incomeList={incomeList} expenseList={expenseList} budgetList={budgetList} />
            <SelectedDate range={dateRange} incomeList={incomeList} expenseList={expenseList} />
        </div>
    );
};

export default Layout;