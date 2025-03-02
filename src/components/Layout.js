import React, { useState } from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
    {/* <NavBar activeTab={activeTab} handleTabClick={handleTabClick} /> */}
      {children}
    </div>
  );
};

export default Layout;