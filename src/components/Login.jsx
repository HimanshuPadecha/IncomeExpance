import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import service from "../Appwrite/Auth"
import  {getTransactions} from '../Appwrite/database'
import { useNavigate } from 'react-router-dom'
import {login} from "../store/loginSlice"
import { setFetchedTransaction } from '../store/dataSlice'

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [loading, setLoding] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(email.length === 0 || password.length===0){
            setError("Enter email and password.")
            return
        }

        if(!emailRegex.test(email)){
            setError("Please Enter a valid Email!!!")
            return 
        }

        if(password.length < 8){
            setError("Enter a password more than 8 letters")
            return
        }
        setLoding(true)
        try{
            const user = await service.login(email,password)
            if(user){
                const userData = await service.getUser()
                if(userData){
                    dispatch(login(userData))
                    const response = await getTransactions(userData.$id)
                    if(response){
                        const getArray = response.documents
                        dispatch(setFetchedTransaction(getArray))
                        navigate("/home")
                    }
                }
            }    
        }catch(error){
            setError(error.message)
        }
        setLoding(false)
    }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-md mx-auto mt-8">
  <label className="block text-lg font-medium mb-2" htmlFor='email'>
    Email:
    <input 
    name='email'
      type="text" 
      id='email'
      value={email}
      onChange={e => setEmail(e.target.value)}
      className="mt-1 block w-full p-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      autoComplete='email'
    />
  </label>

  <label className="block text-lg font-medium mb-2" htmlFor='pass'>
    Password:
    <input 
    name='pass'
    id='pass'
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      className="mt-1 block w-full p-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      autoComplete='current-password'
    />
  </label>

  <button
    type='submit'
    onClick={handleSubmit}
    className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-shadow shadow-md hover:shadow-lg"
  >
    Log in
  </button>

  {loading && <span className="block text-yellow-400 mt-2">Loading...</span>}
  {error && <span className="block text-red-500 mt-2">{error}</span>}
</div>
  )
}

export default Login
