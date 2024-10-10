/* eslint-disable react/prop-types */
import { useState } from 'react';

const ThemeButton = ({ content, icon }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked)
  const handleToggle = () => {
    setIsChecked(prevState => !prevState); 
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

export default ThemeButton;
