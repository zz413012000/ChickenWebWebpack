import React from "react";
import "../css/comicView-footermenu.css";
class FooterMenu extends React.Component{
    movePre(){
        let src="./comicView.html";
        if(this.props.episode!=0){
            src+="?id="+(Number(this.props.episode)-1);
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
    scrollToAnchor(anchorName){
        if(anchorName){
            let anchorElement=document.getElementById(anchorName);
            if(anchorElement){
                anchorElement.scrollIntoView({
                    block:"start",
                    behavior:"smooth"
                });
            }
        }
    }
    render(){
        return (
            <>
                <div className="FooterMenu">
                    <a
                    onClick={()=>this.scrollToAnchor("header")}
                    className="anchor FooterMenu_btn">
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
export default FooterMenu;