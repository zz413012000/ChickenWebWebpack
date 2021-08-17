import React from "react";
import "../css/comicIndex-header.css"

class Header extends React.Component{
    move(){
        let comicsrc="./comicView.html"+"?"+"id=1";
        
        window.location.href=comicsrc;
    }
    render(){
        return (
        <>
            <header>
                <div className="description">
                    <div className="txt">
                        一群可愛的寵物鸚鵡把人搞瘋的故事<br/>
                        身為飼主的人好困擾阿！
                    </div>
                    <div className="number">
                        <div className="views">
                            <img srcSet="img/comic/eye.png"></img>
                            10000
                        </div>
                        <div className="like">
                            <img srcSet="img/comic/heart.png"></img>
                            2774
                        </div>
                    </div>
                    <div 
                    className="button"
                    onClick={this.move.bind(this)}
                    >
                        <button>
                            觀看第一話 &nbsp;&gt;
                        </button>
                    </div>
                </div>
            </header>
        </>
        );
    }
};
export default Header;