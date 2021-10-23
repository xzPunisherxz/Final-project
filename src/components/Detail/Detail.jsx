import React, { useEffect, useState } from "react";
import moment from "moment"
import axios from "axios";
import "./Detail.css";

export const Detail = (props) => {
    const data = props.location.state
    const [cases,setCases]=useState(data)
    const [textValue,setTextValue]=useState(cases)

    const handleSubmit = () => {
        axios.put("http://84.201.129.203:8888/api/cases/${cases._id}", cases, {
            headers:{
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        }).then(() => loadData())
    }
    const loadData = async () => {
        const response = await axios.get("http://84.201.129.203:8888/api/cases/${data._id}", {
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        })
        setCases(response.data)
    }
    const handleChange = (e) => {
        const value = e.target.value
        setTextValue(value)
        const bike={...cases}
        bike.status=value
        bike.ownerFullName=value
        bike.color=value
        bike.type=value
        bike.date=value
        setCases(bike)
    }

    useEffect(() => {
        loadData();
        console.log(data)
    }, []);

    return (
        <>
        <h1 className="detail-title">Детальная страница велосипеда</h1>
        <div className="detail-form">
            <lable className="title">Имя владельца</lable>
            <textarea className="detail-failed" onChange={handleChange} value={textValue.ownerFullName}></textarea>
            <lable className="title">Цвет</lable>
            <textarea className="detail-filed" onChange={handleChange} value={textValue.color}></textarea>
            <lable className="title">Дата кражи: {moment(cases.date).format("L")}</lable>
            <input className="date" type="date"></input>
            <lable className="title">Номер:</lable>
            <textarea className="detail-title" onChange={handleChange} value={textValue.licenseNumber}></textarea>
            <lable className="title">Тип:</lable>
            <textarea className="detail-failed" onChange={handleChange} value={textValue.type}></textarea>
            <p className="immutable">Сосздано в {moment(cases.createdAt).format("L")}</p>
            <p className="immutable">Изменено в {moment(cases.updatedAt).format("L")}</p>
            <p className="immutable">Статус: {cases.status}</p>
            <button className="btn save-btn" onClick={handleSubmit}>Сохранить</button>
        </div>
        </>
    )
}