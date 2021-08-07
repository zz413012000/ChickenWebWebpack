import React from "react";
import "../css/comicIndex-header.css"

class Header extends React.Component{
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
                            10000
                        </div>
                        <div className="like">
                            2774
                        </div>
                    </div>
                    <div className="button">
                        <button>
                            觀看第一話 &nbsp;>
                        </button>
                    </div>
                </div>
            </header>
        </>
        );
    }
};
export default Header;