import React from "react";
export default class Episode extends React.Component{
    render(){
        let comicsrc="./comicView.html"+"?"+"id="+(this.props.no+1);
        return (
            <>
            <li>
                    <a href={comicsrc}>
                        <div className="img">
                        <img srcSet={this.props.list.imgsrc}></img>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {this.props.list.title}
                            </div>
                            <div className="like">
                                <div className="like-icon"></div>
                                <div className="like-number"></div>
                            </div>
                        </div>
                        <div className="serialNO">
                            {"#"+(this.props.no+1)}
                        </div>
                    </a>
                </li>
            </>
        );
    }
}