
const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const SelectedCal = () => {
  return (
    <section className='bg-white dark:bg-dark py-5 lg:py-[120px] mb-20'>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Income </th>
                    <th className={TdStyle.ThStyle}> Expense </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>500 Taka</td>
                    <td className={TdStyle.TdStyle2}>1 Year</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle} colSpan={2}>Total : 100 Taka</td>
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
