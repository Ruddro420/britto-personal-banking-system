
const ReportTable = () => {
    return (
        <div style={{marginTop:'-120px',paddingBottom:'60px'}}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-blue-500">
                                Purpose
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 bg-blue-500">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-600 border-b border-blue-400 text-center">
                            <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
                                Apple
                            </th>
                            <td className="px-6 py-4">
                                100
                            </td>
                            <td className="px-6 py-4 bg-blue-500">
                                10/2/2024
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReportTable;