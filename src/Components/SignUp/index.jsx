import "./style.css";
import sign_up from "../../assets/img/Rectangle 11.png";
import Input from "../Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="h-screen w-screen sign z-0 text-white">
      <img className="w-[50%] h-screen float-right" src={sign_up} />
      <form className="mx-auto flex flex-col w-[25%] bg-transparent my-auto h-screen justify-center">
        <p className="text-2xl mb-8">Sign Up</p>
        <label htmlFor="FirstName"className="text-sm">FirstName :</label>
        <Input
          type="text"
          id="FirstName"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your FirstName"
        />
         <label htmlFor="LastName" className="text-sm">LastName :</label>
        <Input
          type="text"
          id="LastName"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your LastName"
        />
         <label htmlFor="Email" className="text-sm">Email :</label>
        <Input
          type="email"
          id="Email"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="sample@gmail.com"
        />
         <label htmlFor="Password" className="text-sm">Password :</label>
        <Input
          type="password"
          id="Password"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Create Your Password"
        />
         <label htmlFor="ConfrimPassword" className="text-sm">ConfrimPassword :</label>
        <Input
          type="password"
          id="ConfrimPassword"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Confrim Your Password"
        />
       <div>
       <Input
          type="checkbox"
          id="ConfrimPassword"
          value={inputValue}
          onChange={handleInputChange}
        />
         <label htmlFor="ConfrimPassword" className="text-sm">Email me with news:</label>
       </div>
            <button className="bg-[#0034A5] rounded-full h-[50px] font-bold">Register</button>
            <p className="text-sm mt-5 text-[#B4B4B4]">Already a member ? <Link className="font-bold text-white" to="/sign-in">Sign In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;