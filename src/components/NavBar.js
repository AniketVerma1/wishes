// components/NavBar.js

import Link from 'next/link';
import { useState } from 'react';

const NavBar = ({ activeTab, handleTabClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <Link href="/"> */}
              <a className="text-white font-semibold text-lg">Your Logo</a>
            {/* </Link> */}
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {/* Mobile menu icon (e.g., hamburger icon) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 right-4 bg-gray-800 rounded-md shadow-lg">
              <ul className="py-2">
                <li>
                  <NavItem href="/crew-management" onClick={() => {handleTabClick("crew-management"); toggleMobileMenu();}} isActive={activeTab === "crew-management"}>Crew Management</NavItem>
                </li>
                <li>
                  <NavItem href="/recruitment" onClick={() => {handleTabClick("recruitment"); toggleMobileMenu();}} isActive={activeTab === "recruitment"}>Recruitment</NavItem>
                </li>
                <li>
                  <NavItem href="/resource-planning" onClick={() => {handleTabClick("resource-planning"); toggleMobileMenu();}} isActive={activeTab === "resource-planning"}>Resource Planning</NavItem>
                </li>
                <li>
                  <NavItem href="/financial-report" onClick={() => {handleTabClick("financial-report"); toggleMobileMenu();}} isActive={activeTab === "financial-report"}>Financial Report</NavItem>
                </li>
              </ul>
            </div>
          )}
          {/* End of Mobile menu */}
          <ul className="hidden md:flex space-x-4">
            <NavItem href="/crew-management" onClick={() => handleTabClick("crew-management")} isActive={activeTab === "crew-management"}>Crew Management</NavItem>
            <NavItem href="/recruitment" onClick={() => handleTabClick("recruitment")} isActive={activeTab === "recruitment"}>Recruitment</NavItem>
            <NavItem href="/resource-planning" onClick={() => handleTabClick("resource-planning")} isActive={activeTab === "resource-planning"}>Resource Planning</NavItem>
            <NavItem href="/financial-report" onClick={() => handleTabClick("financial-report")} isActive={activeTab === "financial-report"}>Financial Report</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, onClick, isActive, children }) => {
  return (
   
      <a href={href} onClick={onClick} className={`text-white hover:text-gray-400 ${isActive ? 'font-bold' : ''}`}>{children}</a>
   
  );
};

export default NavBar;
