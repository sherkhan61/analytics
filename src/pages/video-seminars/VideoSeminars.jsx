import React from "react";
import LayoutComponent from "../../ui/layout/LayoutComponent";
import sts from '../../assets/images/sts.jpg';
import logo from "../../assets/images/logo.png";
import {videoSeminarsData} from "../../videodata";
import "./video-seminars.scss";
import {Breadcrumb} from "antd";
import {PlaySquareOutlined, UnorderedListOutlined} from "@ant-design/icons";


const VideoSeminars = () => {
    return (
        <LayoutComponent>
            <div className="breadcrumb">
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>
                        <UnorderedListOutlined/>
                        <span>Список</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <PlaySquareOutlined/>
                        <span>Видеосеминары</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="video">
                {videoSeminarsData.map((video) => (
                    <div className="video-container" key={video.id}>
                        <img src={sts} alt="" className="video-image"/>
                        <div className="video-details">
                            <img src={logo} alt="" className="channel-image"/>
                            <div className="details-texts">
                                <div className="details-title">{video.topic}</div>
                                <div className="speaker-name">{video.speaker}</div>
                                <div className="details-info">{video.info}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutComponent>
    )
}

export default VideoSeminars;
