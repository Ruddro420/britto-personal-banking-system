/* eslint-disable react/prop-types */
const SettingButton = ({ content, icon, onClick, color }) => {
  return (
    <>
      <div className="w-full">

        <button
          onClick={onClick}
          type="button"
          className={` bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 me-2 mb-2 gap-2 w-full cursor-pointer ${color? `${color}`:"dark:text-white text-gray-900"}`} 
        >
          {icon}
          <p className={`${color? `${color}`:"dark:text-white text-gray-900"}`}>{content}</p>
        </button>
      </div>
    </>
  );
};

export default SettingButton;
