import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
const App = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [isChange, setIsChange] = useState(false);

  // const addName = (e) => {
  //   e.preventDefault();
  //   setIsChange(true);
  // };
  return (
    <>
      <Header />

      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </>
  );
};

export default App;
