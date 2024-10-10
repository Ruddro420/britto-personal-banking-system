
import ReportChart from "../component/ReportChart";
import SelectedDate from "../component/SelectedDate";
import ReportTable from "./ReportTable";

const Report = () => {
    return (
        <div>
            <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-10">
                <div className="container">
                    <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
                        <h1>Banking Report</h1>
                    </div>
                </div>

            </section>
            <SelectedDate />
            <ReportTable />
            {/*  <ReportChart /> */}
        </div>
    );
};

export default Report;