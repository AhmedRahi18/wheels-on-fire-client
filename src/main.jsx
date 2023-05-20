import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-3 md:mx-10'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
