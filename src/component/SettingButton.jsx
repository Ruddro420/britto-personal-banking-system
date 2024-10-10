/* eslint-disable react/prop-types */
const SettingButton = ({content, icon, onClick}) => {
  return (
    <>
      <div className="w-full">
      {/* text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-4 dark:text-dark-7 py-5 px-2 text-center text-base font-medium */}
        <button
          onClick={onClick}
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 gap-2 w-full cursor-pointer  "
        >
          {icon}
          <p>{content}</p>
        </button>
      </div>
    </>
  );
};

export default SettingButton;
