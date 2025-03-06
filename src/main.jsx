import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Link } from "react-router-dom";
import './index.css'
import App from './App.jsx'
// import Header from './components/header.jsx';
import Footer from "./components/footer";
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
   <App/>
   <Footer />
   </BrowserRouter>
  
  </StrictMode>,
)




