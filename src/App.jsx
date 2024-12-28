import { useEffect, useState } from "react";

// import './App.css'
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Order } from "./component/Order/page";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function IsAuthenticated({ children }) {
  const navigate = useNavigate();
  let cookie = Cookies.get("authToken");
  if (cookie) {
    return children;
  } else {
    return navigate("/login");
  }
}

function App() {
  localStorage.setItem("token", 123412412344);
  // --------------------------------------------------------
  useEffect(() => {
    setLocalStorage();
    getLocalStorage()
  });

  const [user, setUser] = useState(null)

  const handelLogin = (email,password) =>{
    if (email == 'admin@me.com' && password == '123'){
        setUser('admin')
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }
    else{
      alert('Invalid password')

    }

  }
  


  return (
    <>
    {!user ? <Login handelLogin={handelLogin}/>:''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <IsAuthenticated>
              <EmployeeDashboard />
            </IsAuthenticated>
          }
        />
        <Route
          path="/dashboardA"
          element={
            <IsAuthenticated>
              <AdminDashboard />
            </IsAuthenticated>
          }
        />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
