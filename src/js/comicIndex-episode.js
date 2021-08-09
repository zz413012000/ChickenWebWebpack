import React from "react";

class Episode extends React.Component{
    render(){
        let src="img/comic/"+this.props.data.no+".png";
        return (
            <>
            <li>
                    <a href="./comicView.html">
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
                            {"#"+this.props.data.no}
                        </div>
                    </a>
                </li>
            </>
        );
    }
}
export default Episode;