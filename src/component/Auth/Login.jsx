import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Email is",email);
    console.log("Password  is",password);
    let token="argha";
    Cookies.set("authToken",token)
    setemail("")
    setpassword("")
    navigate("/dashboard")    
  };

  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <div className="border-2 rounded-xl border-red-400 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center  "
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent  border-2 border-emerald-500 text-xl py-3 px-5  rounded-full placeholder:text-gray-400"
            type="Email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
            required
            className=" outline-none bg-transparent  border-2 border-emerald-500 text-xl py-3 px-5  rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="text-white outline-none border-none mt-6 border-2 bg-emerald-500 text-xl py-3 px-5  rounded-full placeholder:text-white">
            Log in{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
