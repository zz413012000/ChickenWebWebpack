import React from "react";
import "../css/comicIndex-list.css";
class List extends React.Component{
    render(){
        let list=[
            {
                no:1,
                title:"［第一話］雞的顏值篇！"
            },
            {
                no:2,
                title:"［第二話］雞的命名篇"
            },
            {
                no:3,
                title:"［第三話］雞的教育篇"
            },
            {
                no:4,
                title:"［第四話］瘋子QQ篇"
            },
            {
                no:5,
                title:"［第五話］雞的邊緣果汁篇"
            }
        ]
        return (
            <ul>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/1.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {list[0].title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+list[0].no}
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/2.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title">
                            {list[1].title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+list[1].no}
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                            <img srcSet="img/comic/3.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {list[2].title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+list[2].no}
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                        <img srcSet="img/comic/4.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {list[3].title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+list[3].no}
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="img">
                            <img srcSet="img/comic/5.png"/>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {list[4].title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+list[4].no}
                        </div>
                    </a>
                </li>
            </ul>
        );
    }
}
export default List;