import React, { useContext } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import store from "../../data/store";

export const SignIn = ({active, setActive}) => {
    const {
        handleSubmit,
        data,
        setData,
        email,
        setEmail,
        isError,
        setIsError,
        password,
        setPassword
    } = useContext(store)

    return (
        <div className={active
        ? "signIn-window active"
        : "signIn-window"}
        onClick={() => setActive(true)}>
            <form 
            className="signIn"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}>
                <p className="signIn-text">Вход на сайт</p>
                <Link to="/signUp" onClick={() => setActive(false)} className="auth-link">Регистрация</Link>
                <input 
                type="text"
                value={email}
                placeholder="Введите ваш e-mail"
                onChange={e => setEmail(e.target.value)}></input>
                <input 
                type="text"
                value={password}
                placeholder="Введите ваш пароль"
                onChange={e => setPassword(e.target.value)}></input>
                {isError && <small className="text-danger">Что-то пошло не так. Пожалуйста повторите попытку.</small>}
                <button type="submit" className="signIn-btn btn">Вход</button>
            </form>
        </div>
    )
}
