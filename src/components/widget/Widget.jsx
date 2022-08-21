import React from "react";
import "./widget.scss";

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Widget = ({ type }) => {
    let data;

    //temporary
    const diff = 20;


    switch(type) {
        case "progress":
            data = {
                title: "В работе",
                amount: 4,
                link: "Посмотреть все",
                icon: <WorkIcon className="icon progress-icon" />,
            };
            break;
        case "concluded":
            data = {
                title: "На стадии заключения",
                amount: 6,
                link: "Посмотреть все",
                icon: <BusinessCenterIcon className="icon concluded-icon" />,
            };
            break;
        case "planned":
            data = {
                title: "Планируется",
                amount: 10,
                link: "Посмотреть все",
                icon: <NextWeekIcon className="icon planned-icon" />,
            };
            break;
        case "completed":
            data = {
                title: "Завершенные",
                amount: 20,
                link: "Посмотреть все",
                icon: <TaskAltIcon className="icon completed-icon" />,
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;
