import SelectedDate from "../component/SelectedDate";
import Summary from "../component/Summary";
// import { addIncomeData } from "../redux/productSlice";
import { useSelector } from "react-redux";

const Layout = () => {
    const incomeList = useSelector((state) => state.personalBanking.addIncome);
    const expenseList = useSelector((state) => state.personalBanking.addExpense);
    const budget = useSelector((state) => state.personalBanking.addBudget);
    return (
        <div>
            <Summary incomeList={incomeList} expenseList={expenseList} budget={budget} />
            <SelectedDate incomeList={incomeList} expenseList={expenseList} />
        </div>
    );
};

export default Layout;