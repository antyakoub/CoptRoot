import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/PageLayout.css';

const PageLayout = () => {
  return (
    <div className="page-layout-container">
      <Outlet />
    </div>
  );
};

export default PageLayout;
