import { useState } from 'react'


import './App.css'
import Balance from './Components/Balance'
import ExpanseCard from './Components/ExpanseCard'
import NewTransaction from './Components/NewTransaction'
import Transaction from './Components/Transaction'


function App() {
  const [transaction, setTransaction] = useState([
    {id:1, expanse :'Bill', amount :-2000},
    {id:2, expanse :'Gas Bill', amount :500}
  ])
console.log('transactionvaluess', transaction)

const handleDelete = (id)=>{
  setTransaction(transaction.filter(transaction => transaction.id !=id)

  )
}
  return (
    <>

      <h1 className=' text-4xl mt-6 items-center text-lime-700 font-bold  flex justify-center' >Expense Tracker</h1>
      {/* main container  */}
      <div className=' flex shadow-md bg-slate-50 rounded-lg p-10'>

        {/* <left container  */}
        <div className='max-w-[700px] mt-6 shadow-xl bg-slate-50 rounded-lg p-10'>
          <Balance transaction={transaction} />
          <ExpanseCard transaction={transaction}/>
          <NewTransaction setTransaction={setTransaction} />
        </div>

        {/* right container  */}
        <div className='max-w-[700px] mt-6 shadow-xl bg-slate-50 rounded-lg p-10' >
          <Transaction transaction={transaction} handleDelete={handleDelete}/>
        </div>
      </div>

    </>
  )
}

export default App


// https://www.youtube.com/watch?v=CwAr9cUJA6A