import React from 'react'
import { useSelector } from 'react-redux'

function IncomeExpance() {
  const Transactions = useSelector(state => state.data.Transactions)

  const amounts = Transactions?.map(transaction => transaction.amount)

  const positives = amounts.filter(amount => amount>0)

  const negatives = amounts.filter(amount => amount<0)

  const income = positives.reduce((acc,positive)=>acc+=positive,0)
  const expense = negatives.reduce((acc,negative)=>acc+=negative,0)
  return (
<div className="bg-gray-800 p-4 rounded-lg shadow-md text-white flex justify-center items-center space-x-4 mt-4">
  <span className="text-lg font-medium">
    Income: ${income}
  </span>
  <span className="text-lg font-medium">
    Expense: -${Math.abs(expense)}
  </span>
</div>
  )
}

export default IncomeExpance
