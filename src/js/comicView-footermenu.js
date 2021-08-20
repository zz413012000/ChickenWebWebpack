import React from "react";
import "../css/comicView-footermenu.css";
export default class FooterMenu extends React.Component{
    constructor(props){
        super(props);
    }
    movePre(){
        let src="./comicView.html";
        if(this.props.episode!=0){
            src+="?id="+(this.props.episode-1);
            console.log(src);
            window.location.href=src;
        }
    }
    moveNext(){
        let src="./comicView.html";
        if(this.props.episode<5){
            src+="?id="+(Number(this.props.episode)+1);
            console.log(src);
            window.location.href=src;
        }
    }
    render(){
        return (
            <>
                <div className="FooterMenu">
                    <a href="#header" className="anchor FooterMenu_btn">
                        <img srcSet="img/view/anchor.png"></img>
                    </a>
                    <div 
                    className="PreviousPage FooterMenu_btn"
                    onClick={this.movePre.bind(this)}
                    >
                        <img srcSet="img/view/leftarrow.png"></img>
                    </div>
                    <div 
                    className="NextPage FooterMenu_btn"
                    onClick={this.moveNext.bind(this)}
                    >
                        <img srcSet="img/view/rightarrow.png"></img>
                    </div>
                </div>
            </>
        )
    }
}