import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
  
  const Transactions = useSelector(state=>state.data.Transactions) 

  const amounts = Transactions?.map(transaction=>transaction.amount) ||[]

  const amount = amounts?.reduce((acc,transaction)=> acc+=parseInt(transaction),0)
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-md mx-auto mt-4">
    <h1 className="text-2xl font-semibold mb-3">Expense Tracker</h1>
    <span className="text-2xl font-bold text-green-400">
      Your Balance is: ${amount.toFixed(2)}
    </span>
  </div>

  )
}

export default Balance
