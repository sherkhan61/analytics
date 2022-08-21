import React from "react";
import {BrowserRouter} from "react-router-dom";
import {PageRoutes} from "./PageRoutes";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.less';


function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <ToastContainer position="top-center" />
                <PageRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
