import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Количество испытаний</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={40} text={"40%"} strokeWidth={5} />
                </div>
                <p className="title">Количество испытаний за первое полугодие</p>
                <p className="amount">20</p>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sapiente!</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Не соответствует</div>
                        <div className="itemResult negative">
                            <RemoveIcon fontSize="small" />
                            <div className="itemAmount">18</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Соответствует</div>
                        <div className="itemResult positive">
                            <AddIcon fontSize="small" />
                            <div className="itemAmount">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;
