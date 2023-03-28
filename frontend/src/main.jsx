import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ScrollToTop } from './components/Other/ScrollToTop'
import { FilterProvider } from './context/FilterContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop/>
        <App />       
      </FilterProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
