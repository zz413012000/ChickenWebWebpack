import React from "react";
import "../css/comicView-header.css";
import {list} from "./comicIndex-list";
function Header(props){
    return (
        <>
            <header>
                <div className="icon"></div>
                <div className="title">{list[props.episode-1].title}</div>
                {/* <div className="title">#001 雞的邊緣果汁篇！</div> */}
                <div className="btn"></div>
            </header>
        </>
    );
}
export default Header;