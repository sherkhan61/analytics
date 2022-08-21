import React, {useContext, useState} from "react";
import "./Login.scss";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import sts from "../../assets/images/sts.jpg";
import logo from "../../assets/images/logo.png";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {LockOutlined, MailOutlined} from "@ant-design/icons";


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({type: "LOGIN", payload: user})
                setIsLoading(false);
                navigate("/")
            })
            .catch((error) => {
                setError(true);
                setIsLoading(false);
            });
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form onSubmit={handleLogin} method="post" autoComplete="off">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Войти в систему</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <MailOutlined />
                                    <input
                                        type="text"
                                        placeholder="Введите вашу электронную почту"
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="off"
                                        required/>
                                </div>
                                <div className="input-box">
                                    <LockOutlined />
                                    <input
                                        type="password"
                                        placeholder="Введите ваш пароль"
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="off"
                                        required/>
                                </div>
                                <div className="button">
                                    <button type="submit">{isLoading ? <Spin indicator={antIcon} /> : <span>Войти</span>}</button>
                                </div>
                                {error && <span className="error-text">Неправильный email или пароль!</span>}
                                <div className="login-text">Если у вас нет учетной записи, обратитесь администратору
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="cover">
                    <div className="login-background-wallpaper">
                        <img src={sts} alt="login-background-wallpaper" className="image"/>
                    </div>
                    <div>
                        <img src={logo} alt="" className="logo-in-wallpaper"/>
                    </div>
                    <div className="text">
                        <span className="text-1">Ваш надежный</span>
                        <span className="text-2">Киберщит Казахстана</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
