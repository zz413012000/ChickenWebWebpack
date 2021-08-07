import "../css/index-container.css"
import React from "react";
class Container extends React.Component{
    render(){
        return (
        <>
            <div className="container">
                <div className="container_row">
                <div className="container_item item-top">
                    <div className="transparentsBox"></div>
                    <div className="img-box">
                        <div className="itemborder itemborder-top">
                            <a href="https://www.facebook.com/%E9%9B%9E%E6%83%85%E5%9B%9B%E5%B0%84-%E9%A6%99%E9%9B%9E%E5%85%AB%E6%96%B9%E9%AD%94%E7%8E%8B-103017344415869">
                                <div className="itembutton"></div>
                            </a>                        
                        </div>
                        <div className="imgtopbird">
                            <img srcSet="img/index/topbird.png" alt="" />
                        </div>
                        <div className="imgtopshiny">
                            <img srcSet="img/index/topshiny.png" alt=""/>
                        </div>
                        <div className="imgtopcloud">
                            <img srcSet="img/index/topcloud.png" alt=""/>
                        </div>
                    </div>
                    </div>
                    <div className="container_item item-bottom">
                    <div className="img-box">
                        <div className="itemborder">
                            <a href="./comicIndex.html">
                                <div className="itembutton"></div>
                            </a>
                        </div>
                        <div className="imgbottombird">
                            <img srcSet="img/index/bottombird.png" alt=""/>
                        </div>
                        <div className="imgbottomcloud1">
                            <img srcSet="img/index/bottomcloud1.png" alt=""/>
                        </div>
                        <div className="imgbottomcloud2">
                            <img srcSet="img/index/bottomcloud2.png" alt=""/>
                        </div>
                        <div className="imgbottomshiny">
                            <img srcSet="img/index/bottomshiny.png" alt=""/>
                        </div>
                    </div>
                    <div className="transparentsBox"></div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}
export default Container