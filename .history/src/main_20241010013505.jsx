import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Add from './pages/Add.jsx'
import Layout from './Layout/Layout.jsx'
import Settings from './pages/Settings.jsx'
import Income from './pages/Income.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Layout />,
      },
      {
        path: "/dashboard/add",
        element: <Add />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/income",
        element: <Income />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </StrictMode>,
)
