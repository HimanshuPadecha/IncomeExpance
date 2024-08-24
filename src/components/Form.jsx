import React, { useState } from 'react'
import addDatabaseTransaction from "../Appwrite/database"
import { useDispatch, useSelector } from 'react-redux'
import {addTransaction} from "../store/dataSlice"
import { ID } from 'appwrite'

function Form() {
  const authenticated = useSelector(state=>state.auth.authenticated)
  const userData = useSelector(state=>state.auth.userData)
  
  
  const dispatch = useDispatch()
  const [name,setName] = useState("")
  const [amount,setAmount] = useState("")
  const [error,setError] = useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(name.length === 0 || amount === 0){
      setError("Please enter name and amount both")
      return
    }

      const parsedAmount = parseInt(amount)
      console.log(typeof parsedAmount);
      
    try {
      const userId = userData["$id"] 
      console.log(typeof amount);
      const response = await addDatabaseTransaction(userId,name,parsedAmount)
      if(response){
        dispatch(addTransaction({name,amount:parsedAmount,id:ID.unique()}))
        setError("")
      }
    } catch (error) {
      setError(error.message)
    }
    setName("")
    setAmount("")
  }

  return (

    
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white max-w-md mx-auto mt-4">
    <h2 className="text-2xl font-semibold mb-3">Add New Transaction:</h2>
    
    <label className="block text-lg font-medium mb-2" htmlFor='text'>
      Name of Transaction:
      <input 
      name='text'
      id='text'
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="mt-1 block w-full p-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      />
    </label>
  
    <label className="block text-lg font-medium mb-2" htmlFor='amount'>
      Amount:
      <input 
        type="text"
        id='amoun'
        value={amount}
        name='amount'
        onChange={e => setAmount(e.target.value)}
        className="mt-1 block w-full p-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      />
    </label>
  
    {authenticated ? (
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-shadow shadow-md hover:shadow-lg"
      >
        Add Transaction
      </button>
    ) : (
      <h2 className="text-lg mt-4">Log in or Sign in to Add Transaction</h2>
    )}
    
    {error && <span className="text-red-500 block mt-2">{error}</span>}
  </div>
  
  )
}

export default Form
