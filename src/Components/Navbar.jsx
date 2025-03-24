import React from "react";
import logo from "../assets/Logo.png";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="bg-yellow-50 p-4 flex justify-between items-center px-4 lg:px-24">
      
      <div className="flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center justify-between gap-3">
          <div className="lg:hidden">
            <i className="fas fa-bars text-xl " onClick={()=>{setNavbarOpen(!navbarOpen) }}></i>

          </div>
          <div className="flex items-center mr-8 mb-2 lg:mb-0">
            <img src={logo} alt="Mending Mind Logo" className="h-15" />
          </div>
        </div>
        <div className={`${navbarOpen ? 'block' : 'hidden'} w-full lg:block`}>
          <ul className="w-full flex flex-col lg:flex lg:flex-row gap-8 justify-evenly items-center">
            <li><a href="#home" className="hover:text-blue-500">HOME</a></li>
            <li><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
            <li><a href="#therapy" className="hover:text-blue-500">THERAPY SESSIONS</a></li>
            <li><a href="#community" className="hover:text-blue-500">COMMUNITY</a></li>
            <li><a href="#corporate" className="hover:text-blue-500">CORPORATE</a></li>
            <li><a href="#internships" className="hover:text-blue-500">INTERNSHIPS</a></li>
            <li><a href="#resources" className="hover:text-blue-500">RESOURCES</a></li>
            
          </ul>
        </div>
      </div>
      <button className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500">
        LET'S TALK
      </button>
      
    </nav>
  );
};

export default Navbar;
