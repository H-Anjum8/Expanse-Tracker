import React, { useState } from 'react'

function NewTransaction({ setTransaction }) {

    const [expanse,setExpanse] = useState('')
    const [amount, setAmount] = useState()
    const addTransaction = (e) => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            expanse: expanse,
            amount: +amount,
        }
        console.log('TRANSACTIOM', transaction)
        setTransaction(prevValue => [transaction, ...prevValue])
    }
    console.log('=amount', expanse, amount)
    return (
        <>
            <div className='flex flex-col space-y-4'>
                <h1 className=' mt-4 text-2xl font-bold text-lime-800'>
                    Add New Transaction
                </h1>
                <input className='p-4 border-2 border-slate-400' type='text' onChange={(e) => setExpanse(e.target.value)} placeholder='Write Expense Name' />
                <input className='p-4 border-2 border-slate-400' type='number' onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />
                <button className=' rounded-lg bg-green-700 p-6' onClick={addTransaction}>Add Transaction</button>

            </div>
        </>
    )
}

export default NewTransaction