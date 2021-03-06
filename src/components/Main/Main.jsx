import React, { useContext } from "react";
import { Link } from "react-router-dom";
import store from "../../data/store";
import "./Main.css";
import bike1 from "./img/bike1.jpg";
import bike2 from "./img/bike2.jpg";


export const Main = () => {

    const {isLogin}=useContext(store)
    let bikes;
    if(isLogin){
        bikes = (
            <div className="auth-div">
                <Link className="auth-title" to="/stolenbikes">Украденные велосипеды</Link>
                <Link className="auth-title" to="employees">Ответсвенные сотрудники</Link>
            </div>
        )
    }
    else null
    return (
        <>
        <Link className="report-msg" to="/report">Сообщить о краже</Link>
        {bikes}
        <p className="main-title">Прокат велосипедов ВелоДрайв – это широчайший выбор велосипедов в прокат в Санкт-Петербурге: стандартные и горные, велосипеды комфорт-класса, BMX, складные велосипеды Shulz – всё для того, чтобы поймать велодрайв!</p>
        <img src={bike1} className="main-img1" width="450px" height="300px"/>
        <img src={bike2} className="main-img2" width="450px" height="300px"/>
                
        </>
    )
}