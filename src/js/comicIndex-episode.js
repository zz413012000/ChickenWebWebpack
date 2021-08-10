import React from "react";
export default class Episode extends React.Component{
    render(){
        let src="img/comic/"+this.props.data.no+".png";
        let comicsrc="./comicView.html"+"?"+"id="+(this.props.no+1);
        console.log(comicsrc);
        return (
            <>
            <li>
                    <a href={comicsrc}>
                        <div className="img">
                        {/* <img srcSet="img/comic/1.png"/> */}
                        <img srcSet={this.props.data.imgsrc}></img>
                        </div>
                        <div className="instruction">
                            <div className="title">
                                {this.props.data.title}
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