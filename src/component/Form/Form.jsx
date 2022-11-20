import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/api";
import "./Form.css";
const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {loading , error} = useSelector((state)=>state.user);
  console.log("load",loading);
  console.log("error",error);
  const handleSubmit = (e) => {
    e.preventDefault();
      addUser({email , password} , dispatch)
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formInput">
        <input
          type="email"
          placeholder="Enter Your Name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="formInput">
        <input
          type="password"
          placeholder="Enter Your Email"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loading?"loading...!":<div className="formInput">
        <input type="submit" placeholder="Enter Your Name" />
      </div>}

      {error&&loading===false &&"Error...!"}
    </form>
  );
};

export default Form;
