import React from "react";
import "../css/comicView-comment.css";
function Comment(){
    return (
        <>
        <footer>
            <div className="creator">
                <div className="creator_name">脆脆雞。作家</div>
                <div className="creator_note">OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
            </div>
            <div className="comment">
                <div className="comment_menu">
                    <div className="menu_top">
                        <div className="collect"></div>
                        <div className="like"></div>
                        <div className="share"></div>
                    </div>
                    <div className="menu_bottom">
                        <div className="like">
                            <div className="like_icon"></div>
                            <div className="like_number"></div>
                        </div>
                        <div className="comment">
                            <div className="comment-icon"></div>
                            <div className="comment_number"></div>
                        </div>
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