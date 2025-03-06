import { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "../pages/Home";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded">Home</Link>
          <Link to="/Service" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded">Services</Link>
          <Link to="/About" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded">About</Link>
          <Link to="/Contact" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded">Contact</Link>
          <Link to="/Login" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded"> Login </Link>
          <Link to="/Register" className="hover:bg-blue-600 text-black hover:text-white p-1 md:p-2 lg:p-2 transition duration-300 rounded"> Register </Link>
          
        </nav>

    
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md"> <center>
          <Link to="/" className="block p-3 hover:bg-gray-100">Home</Link>
          <Link to="/Service" className="block p-3 hover:bg-gray-100">Services</Link>
          <Link to="/about" className="block p-3 hover:bg-gray-100">About</Link>
          <Link to="/Contact" className="block p-3 hover:bg-gray-100">Contact</Link>
          <Link to="/Login" className="block p-3 hover:bg-gray-100"> Login </Link>
          <Link to="/Register" className="block p-3 hover:bg-gray-100"> Register </Link></center>
        </nav>
      )}  
    </header>
  );
};

export default Header;
