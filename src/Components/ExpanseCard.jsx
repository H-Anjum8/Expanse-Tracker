import React from 'react'

function ExpanseCard({transaction}) {

  const amount = transaction.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
  
  return (
<>
{/* main container  */}
<div className=' flex justify-between  items-center mx-auto '>
    {/* income container  */}
<div className='space-y-4 shadow-md bg-slate-50 rounded-lg p-10'>
  <h1>Income</h1>
  <p className=' text-green-600 '>${income}</p>
  </div>
  {/* expence container */}
  <div className='space-y-4 shadow-md bg-slate-50 rounded-lg p-10'>
  <h1>Expense</h1>
  <p className=' text-red-600'>${expense}</p>
  </div>
  </div>
</>
  )
}

export default ExpanseCard