import React from "react";
import "../css/comicIndex-list.css";
import Episode from "./comicIndex-episode.js";
class List extends React.Component{
    render(){
        let list=[
            {
                no:1,
                title:"［第一話］雞的顏值篇！",
                imgsrc:"img/comic/list/1.png"
            },
            {
                no:2,
                title:"［第二話］雞的命名篇",
                imgsrc:"img/comic/list/2.png"
            },
            {
                no:3,
                title:"［第三話］雞的教育篇",
                imgsrc:"img/comic/list/3.png"
            },
            {
                no:4,
                title:"［第四話］瘋子QQ篇",
                imgsrc:"img/comic/list/4.png"
            },
            {
                no:5,
                title:"［第五話］雞的邊緣果汁篇",
                imgsrc:"img/comic/list/5.png"
            }
        ]
        let episodesKey=-1;
        return (
            <ul>
                {list.map((item)=>{
                    episodesKey++;
                    return <Episode key={episodesKey} data={list[episodesKey]}/>
                })}
                {/* <Episode data={list}/> */}
                {/* <li>
                    <a href="./comicView.html">
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
                    <a href="./comicView.html">
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
                    <a href="./comicView.html">
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
                    <a href="./comicView.html">
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
                    <a href="./comicView.html">
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
                </li> */}
            </ul>
        );
    }
}
export default List;