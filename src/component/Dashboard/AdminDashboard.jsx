import React from "react";
import Header from "../others/Header";
import CreatTusk from "../others/CreatTusk";
import Alltusk from "../others/Alltusk";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreatTusk/>
      <Alltusk/>
    </div>
  );
};

export default AdminDashboard;
