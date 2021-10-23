import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

export const SignUp = () => {
    const [email, setEmail]=useState("")
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [surname, setSurname]=useState("")
    const [repassword, setRepassword]=useState("")
    const [data, setData]=useState(null)
    const [isError, setIsError]=useState(false);

    const handleSubmit=(e)=> {
        e.preventDefault()
        setIsError(false);

        const data = {
            name,
            surname,
            email,
            password,
            repassword,
            clientId:"e71239e6-67d5-49e2-8ad3-1c845e3042de"
        };
        const headers = {
            "Content-Type":"application/json",
        }

        axios.post("http://84.201.129.203:8888/api/auth/sign_up",data,headers).then(res => {
            setData(res.data);
            setEmail("");
            setName("");
            setSurname("");
            setPassword("");
            setRepassword("")
        }).catch(err => {
            console.log(err)
            setIsError(true)
        });
    }

    return (
        <>
        <h1 className="signUp_text">Регистрация</h1>
        <form onSubmit={handleSubmit} className="signUp">
            <input onChange={e=> setName(e.target.value)} value={name} type="text" placeholder="Имя"/>
            <input onChange={e=> setSurname(e.target.value)} value={surname} type="text" placeholder="Фамилия"/>
            <input onChange={e=> setEmail(e.target.value)} value={email} type="text" placeholder="e-mail"/>
            <input onChange={e=> setPassword(e.target.value)} value={password} type="password" placeholder="Пароль"/>
            <input onChange={e=> setRepassword(e.target.value)} value={repassword} type="password" placeholder="Подтвердите Пароль"/>
            {isError && <small className="text-danger">Что-то пошло не так. Пожалуйста попробуйте снова</small>}
            <button className="signUp-btn">Зарегистрироваться</button>
        </form>
        </>
    )
}