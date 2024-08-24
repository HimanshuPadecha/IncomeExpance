import React, { useState } from 'react'
import service from "../Appwrite/Auth"
import { logout as SliceLogout } from '../store/loginSlice'
import { useDispatch } from 'react-redux'
import { deleteFromDOM } from '../store/dataSlice'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    const [error,setError] = useState("")
    const [Loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const handleLogout = async() =>{
      setLoading(true)
        try {
             await service.logout()
              dispatch(SliceLogout())
              dispatch(deleteFromDOM())
            navigate("/login")
             setError("")
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }
  return (
    <div>
        {error && <span>{error}</span>}
        <button onClick={handleLogout} className='text-white bg-blue-600 px-6 py-2 rounded-lg text-sm font-medium transition hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 px-6 py-2 rounded-lg text-sm font-medium transition'>Logout</button>
        {Loading && <span className="block text-yellow-400 mt-2">Loading...</span>}
        </div>
  )
}

export default Logout


