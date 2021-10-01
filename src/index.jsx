import React, { Component, useState } from "react";
import ReactDom from "react-dom";
import "./user.css"

import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { Header } from "./components/Header";
import StoreApi from "./data/store";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import axios from "axios";
import { Main } from "./components/Main";
import { Report } from "./components/Report";


export const App = () => {

    const [isLogin, setIsLogin]=useState()
    const [active, setActive]=useState(false)
    const [email, setEmail]=useState("")
    const [password, setPassowrd]=useState("")
    const [data, setData]=useState(null)
    const [isError, setIsError]=useState(false);

    const handleSubmit = (e) => {
    e.preventDefault()
    setIsError(false);

    const data = {
      email:email,
      password:password
    }
    axios.post("http://84.201.129.203:8888/api/auth/sign_in", data, { headers }).then(res => {
      setData(res.data);
      setEmail("");
      setPassowrd("");
      setActive(false);
      setIsLogin(true);
      localStorage.setItem("token",res.data.token)

    }).catch(err => {
      setIsError(true);
      setEmail("");
      setPassowrd("")
    });
  }

  const headers={
    "Content-Type": "application/json",
  }

return (
    <>
    <div className="wrapper">
      <StoreApi.Provider value={{handleSubmit, isLogin, setIsLogin, data, setData, email, setEmail, isError, setIsError, password, setPassowrd}}>
        <Header setActive={setActive} active={active}/>
        <SignIn setActive={setActive} active={active}/>        
        <Route exact path ="/" component={Main}/>
      </StoreApi.Provider>
      <Route path = "/signUp" component={SignUp}/>
      <Route path = "/report" component={Report}/>      
    </div>
    </>
  )
}

ReactDom.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById("root"),
);
