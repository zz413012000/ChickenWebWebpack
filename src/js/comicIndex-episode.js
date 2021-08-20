import React from "react";
export default class Episode extends React.Component{
    render(){
        let comicsrc="./comicView.html"+"?"+"id="+(this.props.no+1);
        console.log(this.props.isClick);
        return (
            <>
            <li onClick={() => this.props.onClick()}>
                    <a 
                    href={comicsrc}
                    >
                        <div className="img">
                        <img srcSet={this.props.list.imgsrc}></img>
                        </div>
                        <div className={this.props.isClick?"instruction clicked":"instruction"}>
                            <div className="title">
                                {this.props.list.title}
                            </div>
                            <div className="like">
                                <div className="like-icon">
                                    <img srcSet="img/comic/like.png"></img>
                                </div>
                                <div className="like-number">
                                    {(this.props.no+1)*100}
                                </div>
                            </div>
                        </div>
                        <div className={this.props.isClick?"serialNO clicked":"serialNO"}>
                            {"#"+(this.props.no+1)}
                        </div>
                    </a>
                </li>
            </>
        );
    }
}