import "./Header.css";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import store from "../../data/store";


export const Header = ({active, setActive}) => {

    const {isLogin, setIsLogin} = useContext(store)

    const handleLogOut=()=>{
        setIsLogin(false)
        localStorage.clear()
    }
    let button;
    if (isLogin) {
        button = (
            <li>
                <Link className="link" onClick={handleLogOut} to="/">Выход</Link>
            </li>
        )
    } else button = (
        <li>
            <Link className="link" onClick={() => setActive=(true)}>Вход</Link>
        </li>
    )
    return (
        <div>
           <div className="header">
               <ul className="list">
                   <li>
                       <Link className="link" to="/">Главная</Link>
                   </li>
                   {button}
                </ul>
           </div>
        </div>
    )
}