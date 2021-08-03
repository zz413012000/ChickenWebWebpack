import "../css/index-footer.css";
import React from "react";

class Footer extends React.Component{
    render(){
        return (
            <>
            <div className="foot">
                <div className="rock leftrock">
                    <img srcSet="img/index/leftrock.png" alt=""/>
                </div>
                <div className="card">
                    <div className="card_cloud card_cloud1">
                        <img srcSet="img/index/cardcloud1.png"></img>
                    </div>
                    <div className="card-img">
                        <img srcSet="img/index/card1.png" alt=""/>
                    </div>                    
                    <div className="card_background">
                        <img srcSet="img/index/cardbackground.png" alt=""/>
                    </div>
                    <div className="card_button">
                        <img srcSet="img/index/yellowsausage.png" alt=""/>
                    </div>
                    <div className="card_arrow arrow-left">
                        <img srcSet="img/index/cardbuttonleft.png"></img>
                    </div>
                    <div className="card_arrow arrow-right">
                        <img srcSet="img/index/cardbuttonright.png"></img>
                    </div>
                    <div className="card_cloud card_cloud2">
                        <img srcSet="img/index/cardcloud2.png"></img>
                    </div>
                </div>
                <div className="rock rightrock">
                    <img srcSet="img/index/rightrock.png" alt=""/>
                </div>
            </div>
            </>
        );
    }
}
export default Footer;