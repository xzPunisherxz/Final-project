import React, { useState } from "react";
import axois from "axios";
import "./Report.css";
import axios from "axios";

export const Report = () => {
    const [isSubmit,setSubmit]=useState()
    const [licenseNamber,setLicense]=useState("")
    const [date,setDate]=useState("")
    const [color,setColor]=useState("")
    const [type,setType]=useState("")
    const [ownerFullName,setName]=useState("")
    const [data,setData]=useState(null)

    const handleChange = (e) => {
        setType(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            status: "new",
            date,
            licenseNamber,
            color,
            type: type,
            ownerFullName,
            createdAt: new Date(),
            updateAt: new Date(),
            clientId: "e71239e6-67d5-49e2-8ad3-1c845e3042de"
        }
        axios.post("http://84.201.129.203:8888/api/public/report",data).then(res => {
            setData(res.data)
            setLicense("")
            setName("")
            setColor("")
            setType("")
            setDate("")
            setSubmit(true)
            console.log(rex.data)
        }).catch(err => {
            console.log(err)
        });
    }
    return (
        <div>
            <h1 className="modal-text">Сообщить о краже</h1>
            <form onSubmit={handleSubmit} className="report">
                <lable>Имя владельца</lable>
                <input className="report-input" text="text" onChange={(e) => setName(e.target.value)} value={ownerFullName}></input>

                <lable>Номер</lable>
                <input className="report-input" text="text" onChange={(e) => setLicense(e.target.value)} value={licenseNamber}></input>

                <lable>Дата кражи</lable>
                <input className="report-input" text="date" onChange={(e) => setDate(e.target.value)} value={date}></input>

                <lable>Цвет</lable>
                <input className="report-input" tetx="text" onChange={(e) => setColor(e.target.value)} value={color}></input>

                <lable className="type">Тип</lable>
                <select onChange={handleChange}>
                    <option value="sport">Sport</option>
                    <option value="general">General</option>
                </select>
                <button className="signUp-btn" type="submit">Отправить</button>
                {isSubmit&& <small className="report-text">Отправлено</small>}
            </form>
        </div>
    )
}