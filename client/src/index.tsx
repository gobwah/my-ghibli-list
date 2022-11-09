import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/misc/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
