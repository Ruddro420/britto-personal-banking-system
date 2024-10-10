import SettingButton from "../component/SettingButton";
import { Moon, KeyRound, UserRoundPen, CalendarDays, ListChecks, Trash2 } from "lucide-react";
import ThemeButton from "../component/ThemeButton";
import { useOutletContext } from "react-router-dom";

const Settings = () => {
    // Access the context passed via Outlet
    const { isDarkMode, handleThemeToggle } = useOutletContext();

    return (
        <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-5">
            <div className="container">
                <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
                    <h1>Settings</h1>
                </div>
                <div className="flex flex-col gap-2 py-10">
                    {/* Pass the context props to ThemeButton */}
                    <ThemeButton 
                        content={"Dark Mode"} 
                        icon={<Moon />} 
                        onToggle={handleThemeToggle} 
                        isChecked={isDarkMode} 
                    />
                    <SettingButton content={"Change Password"} icon={<KeyRound />} onClick={""} />
                    <SettingButton content={"Edit Profile"} icon={<UserRoundPen />} onClick={""} />
                    <SettingButton content={"Calendar"} icon={<CalendarDays />} onClick={""} />
                    <SettingButton content={"Payment Categories"} icon={<ListChecks />} onClick={""} />
                    <SettingButton content={"Delete Data"} icon={<Trash2 />} onClick={""} color={"text-red-400"} />
                </div>
            </div>
        </section>
    );
};

export default Settings;
