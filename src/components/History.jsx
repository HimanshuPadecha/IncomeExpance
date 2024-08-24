import React from 'react'
import { useSelector } from 'react-redux'

function History() {
  const Transactions = useSelector(state=>state.data.Transactions)
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-lg mx-auto mt-8">
  <h3 className="text-xl font-semibold mb-4">History of Transactions:</h3>
  {Transactions?.map(transaction => (
    <h5 key={transaction.id} className="text-lg font-medium mb-3">
      {transaction.name} : ${transaction.amount}
    </h5>
  ))}
</div>

  
  )
}

export default History
