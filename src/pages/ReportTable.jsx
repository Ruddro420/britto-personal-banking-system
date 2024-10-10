const ReportTable = () => {

  return (
    <div style={{ marginTop: "-110px", paddingBottom: "60px" }}>
      <div className="relative overflow-x-auto shadow-md rounded-b-md mx-4">
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 ">
          <thead className="text-xs dark:text-white uppercase dark:bg-gray-500 bg-gray-300 text-black">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Purpose
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Report Data to show----------- */}
            <tr className="dark:bg-gray-700 border-b text-black dark:text-white dark:border-gray-900 blue-400 text-center">
              <th
                scope="row"
                className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white"
              >
                Apple
              </th>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4 dark:bg-gray-800 bg-gray-100 text-black dark:text-white">10/2/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
