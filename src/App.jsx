import "slick-carousel/slick/slick.css"; // Import carousel styles
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/header"; // Import Header component
import About from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <Header /> {/* Render the Header here */}
      <Routes> {/* Define routes */}
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/about" element={<About />} /> {/* About Route */}
        <Route path="/service" element={<Service />} /> {/* Service Route */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />}/>
        
      </Routes>
    </div>
  );
}

export default App;
