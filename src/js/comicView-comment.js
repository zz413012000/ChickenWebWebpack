import React from "react";
import "../css/comicView-comment.css";
function Comment(){
    return (
        <>
        <footer>
            <div className="creator">
                <div className="creator_name"></div>
                <div className="creator_note"></div>
            </div>
            <div className="comment">
                <div className="comment_menu">
                    <div className="menu_top">
                        <div className="collect"></div>
                        <div className="like"></div>
                        <div className="share"></div>
                    </div>
                    <div className="menu_bottom">
                        
                    </div>
                </div>
                <div className="comment_area">
                    <div className="comment1"></div>
                </div>
            </div>
        </footer>
        </>
    );
}
export default Comment;