import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import MouseFollowBackground from './MouseFollowBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MouseFollowBackground />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;