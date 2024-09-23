import React from 'react'

function Balance({transaction}) {

  const amount = transaction.map(transaction=>transaction.amount)
  const total = amount.reduce((amount,item)=>(amount += item),0).toFixed(2)
  return (
   <>

   <h1>Balance :${total} </h1>
   </>
  )
}

export default Balance