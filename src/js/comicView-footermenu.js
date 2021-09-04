import React from "react";
import "../css/comicView-footermenu.css";
export default function FooterMenu(props){
    function movePre(){
        let src="./comicView.html";
        if(props.episode!=0){
            src+="?id="+(Number(props.episode)-1);
            window.location.href=src;
        }
    }
    function moveNext(){
        let src="./comicView.html";
        if(props.episode<5){
            src+="?id="+(Number(props.episode)+1);
            console.log(src);
            window.location.href=src;
        }
    }
    function scrollToAnchor(anchorName){
        if(anchorName){
            let anchorElement=document.getElementById("header");
            if(anchorElement){
                anchorElement.scrollIntoView({
                    block:"start",
                    behavior:"smooth"
                });
            }
        }
    }
    return (
        <>
            <div className="FooterMenu">
                <a
                onClick={scrollToAnchor("header")}
                className="anchor FooterMenu_btn">
                    <img srcSet="img/view/anchor.png"></img>
                </a>
                <div 
                className="PreviousPage FooterMenu_btn"
                onClick={movePre}
                >
                    <img srcSet="img/view/leftarrow.png"></img>
                </div>
                <div 
                className="NextPage FooterMenu_btn"
                onClick={moveNext}
                >
                    <img srcSet="img/view/rightarrow.png"></img>
                </div>
            </div>
        </>
    )
}