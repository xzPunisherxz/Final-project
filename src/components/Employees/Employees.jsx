import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Employees = () => {
    const [isSubmit,setSubmit]=useState()
    const [data,setData]=useState(null)
    const [name,setName]=useState("")
    const [surName,setSurName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            firstName:name,
            lastName:surName,
            email:email,
            password:password,
            clientId:"e71239e6-67d5-49e2-8ad3-1c845e3042de",
            approved: false,
        }
        axios.post("http://84.201.129.203:8888/api/officers",data, {
            headers:{
                Authorization: "Bearer " +localStorage.getItem("token")
            }
        }).then(res => {
            setData(res.data)
            setName("")
            setSurName("")
            setEmail("")
            setPassword("")
            setSubmit(true)
        })
    }

    return (
        <div>
            <h1 className="modal-text">Ответсвенные сотрудники</h1>
            <form className="report" onSubmit={handleSubmit}>
                <label>Имя</label>
                <input className="report-input" type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Фамилия</label>
                <input className="report-input" type="text" onChange={(e) => setSurName(e.target.value)} value={surName}></input>
                <label>E-mail</label>
                <input className="report-input" type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Пароль</label>
                <input className="report-input" type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

                <button className="signUp-btn" type="submit">Отправить</button>
                {isSubmit && <small className="report-text">Отправлено.</small>}
                <Link className="link" to="/employeelist">Список сотрудников</Link> 
            </form>
        </div>
    )

}