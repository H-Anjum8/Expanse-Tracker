import React from 'react'

function SingleTransaction({ data,handleDelete }) {

    const color = data.amount >0 ? 'green':'red'

    
    return (
        <>
            <div className="flex items-center justify-between m-6 p-4 " style={{background:`${color}`}}>
               <button onClick={()=>handleDelete(data.id)}>Delete</button>
                <p>   {data.expanse}</p>
                <p> {data.amount}</p>



            </div>

        </>
    )
}

export default SingleTransaction