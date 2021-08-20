import React from "react";
import "../css/comicView-footermenu.css";
export default class FooterMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <div className="FooterMenu">
                    <div className="anchor FooterMenu_btn">
                        <img srcSet="img/view/anchor.png"></img>
                    </div>
                    <div className="PreviousPage FooterMenu_btn">
                        <img srcSet="img/view/leftarrow.png"></img>
                    </div>
                    <div className="NextPage FooterMenu_btn">
                        <img srcSet="img/view/rightarrow.png"></img>
                    </div>
                </div>
            </>
        )
    }
}