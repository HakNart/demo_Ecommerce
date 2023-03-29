import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import { ScrollToTop } from './components/Other/ScrollToTop'
import { FilterProvider } from './context/FilterContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop/>
        <ToastContainer closeButton={false} position={'bottom-left'} autoClose={2000}/>
        <App />       
      </FilterProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
