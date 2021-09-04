import React from "react";
export default function Episode(props){
    let comicsrc="./comicView.html"+"?"+"id="+(props.no+1);
    return (
        <>
        <li onClick={props.onClick}>
                <a 
                href={comicsrc}
                >
                    <div className="img">
                    <img srcSet={props.list.imgsrc}></img>
                    </div>
                    <div className={props.isClick?"instruction clicked":"instruction"}>
                        <div className="title">
                            {props.list.title}
                        </div>
                        <div className="like">
                            <div className="like-icon">
                                <img srcSet="img/comic/like.png"></img>
                            </div>
                            <div className="like-number">
                                {(props.no+1)*100}
                            </div>
                        </div>
                    </div>
                    <div className={props.isClick?"serialNO clicked":"serialNO"}>
                        {"#"+(props.no+1)}
                    </div>
                </a>
            </li>
        </>
    );
}