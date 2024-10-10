import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomNav from "../component/BottomNav";
import TopNav from "../component/TopNav";

const Dashboard = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log(isDarkMode);
    const handleThemeToggle = (isChecked) => {
        setIsDarkMode(isChecked);
    };

    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className="dark:bg-gray-900 bg-white">
            <TopNav />
            <Outlet context={{ isDarkMode, handleThemeToggle }} />
            <BottomNav />
            </div>
        </div>
    );
};

export default Dashboard;
