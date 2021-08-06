import React from "react";
import "../css/comicIndex-list.css";
class List extends React.Component{
    render(){
        return (
            <ul>
                <li>
                    <a>
                        <div className="img">
                            <img srcSet="img/comic/5.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title"></div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO"></div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/4.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title"></div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO"></div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                            <img srcSet="img/comic/3.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title"></div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO"></div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/2.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title"></div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO"></div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/1.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title"></div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO"></div>
                    </a>
                </li>
            </ul>
        );
    }
}
export default List;