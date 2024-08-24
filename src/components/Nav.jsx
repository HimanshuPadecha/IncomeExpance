import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Nav() {
    const authenticated = useSelector(state => state.auth.authenticated)
    const navigate = useNavigate()
    const navItems = [
        {
            name:"Home",
            path:"/home",
            active:true
        },
        {
            name:"Log in",
            path:"/login",
            active:!authenticated
        },
        {
            name:"Sign up",
            path:"/signup",
            active:!authenticated
        },
    ]
  return (
    <nav className="bg-gray-800 p-4 shadow-md w-full rounded-lg">
  <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
    <ul className="flex space-x-6"> {/* Increased spacing between buttons */}
      {navItems.map(item => (
        item.active ? (
          <li key={item.name}>
            <button
            
              onClick={() => navigate(item.path)}
              className="text-white bg-blue-600 px-6 py-2 rounded-lg text-sm font-medium transition hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              {item.name}
            </button>
          </li>
        ) : null
      ))}
      {authenticated ? (
        <li>
          <Logout />
        </li>
      ) : null}
    </ul>
  </div>
</nav>
  
  )
}

export default Nav
