import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Add from './pages/Add.jsx'
import Layout from './Layout/Layout.jsx'
import Settings from './pages/Settings.jsx'
import Income from './pages/Income.jsx'
import Expense from './pages/Expense.jsx'
import Report from './pages/Report.jsx'
import Budget from './pages/Budget.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { persistor, store } from './redux/store.jsx'

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
      {
        path: "/dashboard/expense",
        element: <Expense />,
      },
      {
        path: "/dashboard/report",
        element: <Report />,
      },
      {
        path: "/dashboard/budget",
        element: <Budget />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} >
        <App/>
        <ScrollRestoration />
      </RouterProvider>
      </PersistGate>
      <ToastContainer />
    </Provider>
  </StrictMode>,
)
