// components/NavBar.js

import Link from 'next/link';

const NavBar = ({ activeTab, handleTabClick }) => {
  const festivalImageUrl = '../../train.jpg';
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          
              {/* <a href="/" className="text-white font-semibold text-lg">Your Logo</a> */}
            

<img src={festivalImageUrl} className="h-8 w-auto mr-4" alt="Festival Logo" />
           
          </div>
          <ul className="flex space-x-4">
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
    <li>
      
        <a href={href} className={`text-white hover:text-gray-400 ${isActive ? 'font-bold' : ''}`} onClick={onClick}>{children}</a>
     
    </li>
  );
};

export default NavBar;
