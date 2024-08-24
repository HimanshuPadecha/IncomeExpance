import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './components/Main.jsx'
import store from './store/store.js'
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"

const router = createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[
    {
      path:"/home",
      element:<Main/>
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/signup",
      element:<Signup />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
