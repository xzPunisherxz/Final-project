import React, { useState } from "react";
import "./Report.css";
import axios from "axios";

export const Report = () => {
    const [isSubmit,setSubmit]=useState()
    const [licenseNumber,setLicenseNumber]=useState("")
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
            licenseNumber,
            color,
            type: type,
            ownerFullName,
            createdAt: new Date(),
            updateAt: new Date(),
            clientId: "e71239e6-67d5-49e2-8ad3-1c845e3042de"
        }
        axios.post("http://84.201.129.203:8888/api/public/report",data).then(res => {
            setData(res.data)
            setLicenseNumber("")
            setName("")
            setColor("")
            setType("")
            setDate("")
            setSubmit(true)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });
    }
    return (
        <div>
            <h1 className="modal-text">Сообщить о краже</h1>
            <form onSubmit={handleSubmit} className="report">
                <label>Имя владельца</label>
                <input className="report-input" type="text" onChange={(e) => setName(e.target.value)} value={ownerFullName}></input>

                <label>Номер</label>
                <input className="report-input" type="text" required onChange={(e) => setLicenseNumber(e.target.value)} value={licenseNumber}></input>

                <label>Дата кражи</label>
                <input className="report-input" type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>

                <label>Цвет</label>
                <input className="report-input" type="text" onChange={(e) => setColor(e.target.value)} value={color}></input>

                <label className="text">Тип</label>
                <select onChange={handleChange}>
                    <option value="sport">Sport</option>
                    <option value="general">General</option>
                </select>
                <button className="signUp-btn" type="submit">Отправить</button>
                {isSubmit && <small className="report-text">Отправлено</small>}
            </form>
        </div>
    )
}