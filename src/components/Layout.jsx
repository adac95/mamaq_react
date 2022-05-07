import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import { useSelector } from "react-redux";
import { UserNavHeader } from "./UserNavHeader";


const Layout = ({ children }) => {
  const user = useSelector((state) => state.user)
  return (
    <div className='Main'>
      <UserNavHeader user={user}/> 
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
