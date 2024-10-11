/* eslint-disable react/prop-types */

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium dark:text-white text-black  lg:py-7 lg:px-4`,
  TdStyle: `dark:text-white text-black border-b border-l border-white dark:border-gray-900 bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle3: `text-dark border-b border-[#E8E8E8] bg-gray-100 dark:border-dark dark:bg-dark-4 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const SelectedCal = ({income, expense}) => {
  return (
    <section className='bg-white dark:bg-dark py-3 lg:py-[120px] pb-[100px] mx-4 rounded-md'>

      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto rounded-md'>
              <table className='w-full table-auto '>
                <thead className='text-center dark:bg-gray-800 bg-gray-200'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Income </th>
                    <th className={TdStyle.ThStyle}> Expense </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>= {Number(income)}</td>
                    <td className={TdStyle.TdStyle}>= {Number(expense)}</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle3} colSpan={2}>Total = {Number(income)+Number(expense)} Taka</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SelectedCal;
