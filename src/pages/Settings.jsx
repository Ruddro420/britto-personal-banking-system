/* eslint-disable react/prop-types */
import { Moon, KeyRound, UserRoundPen, CalendarDays, ListChecks, Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Settings = () => {
    // Access the context passed via Outlet
    const { isDarkMode, handleThemeToggle } = useOutletContext();
    const handleClearData = () => {
        localStorage.clear(); 
        alert("All data has been cleared from local storage.");
    };
    return (
        <section className="bg-gray-200 pt-[90px] dark:bg-gray-900 lg:pb-20 lg:pt-[120px] pb-5">
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
                    <SettingButton content={"Delete Data"} icon={<Trash2 />} onClick={handleClearData} color={"text-red-400"} />
                </div>
            </div>
        </section>
    );
};

export default Settings;


/* Setting Button----------------------------------------------- */

const SettingButton = ({ content, icon, onClick, color }) => {
  return (
    <>
      <div className="w-full">

        <button
          onClick={onClick}
          type="button"
          className={` bg-white hover:bg-gray-100 border border-gray-200  focus:outline-none  font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 me-2 mb-2 gap-2 w-full cursor-pointer ${color? `${color}`:"dark:text-white text-gray-900"}`} 
        >
          {icon}
          <p className={`${color? `${color}`:"dark:text-white text-gray-900"}`}>{content}</p>
        </button>
      </div>
    </>
  );
};

/* Theme Togle Button-------------------------------------- */

const ThemeButton = ({ content, icon, onToggle, isChecked }) => {
  const handleToggle = () => {
      const newValue = !isChecked;
      onToggle(newValue); // Notify the parent component of the new stat
  };
  return (
      <div className="w-full">
          <label
              htmlFor="themetogle"
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 w-full cursor-pointer justify-between"
          >
              <div className="flex items-center gap-2">
                  {icon}
                  <p>{content}</p>
              </div>

              <div className="inline-flex items-center cursor-pointer">
                  <input
                      id="themetogle"
                      name="themetogle"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                      className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
          </label>
      </div>
  );
};