import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom"
import { auth } from "../../firebase";
import {signOut} from "firebase/auth";
import {DarkModeContext} from "../../context/darkModeContext";
import "./Sidebar.scss";
import logo from "../../assets/images/logo.png"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        signOut(auth)
            .then(() => {
                // Sign-out successful
                localStorage.clear()
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message());
            });
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="logo">
                    <img src={logo} alt="sts" className="logo-image"/>
                    <span className="logo-text">Аналитика испытаний</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Главная</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <Link to="/">
                            <span>Главная</span>
                        </Link>
                    </li>
                    <p className="title">Список</p>
                    <Link to="/users">
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Специалисты</span>
                        </li>
                    </Link>
                    <Link to="/systems">
                        <li>
                            <GppGoodIcon className="icon"/>
                            <span>Испытания</span>
                        </li>
                    </Link>
                    <li>
                        <AppRegistrationIcon className="icon"/>
                        <span>МОЗ</span>
                    </li>
                    <li>
                        <AssignmentIcon className="icon"/>
                        <span>МОБФ</span>
                    </li>
                    <li>
                        <DesktopMacIcon className="icon"/>
                        <span>Видеосеминары</span>
                    </li>
                    <p className="title">Полезное</p>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Архив</span>
                    </li>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Статистика</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Уведомления</span>
                    </li>
                    <p className="title">Сервисы</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>Система</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Настройки</span>
                    </li>
                    <p className="title">Пользователь</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Профиль</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span><button onClick={handleLogout}>Выйти</button></span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOptions" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;
