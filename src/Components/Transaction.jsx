import React from 'react'
import SingleTransaction from './SingleTransaction'

function Transaction({transaction, handleDelete}) {
    console.log('transaction1', transaction)
  return (
  <>
   <h1 className=' font-bold text-4xl text-lime-700'> Transactions History</h1>


    {transaction.map((data)=>(
     <SingleTransaction key={data.id} data={data} handleDelete={handleDelete}/>
  
    ))}


  
  </>
  )
}

export default Transaction