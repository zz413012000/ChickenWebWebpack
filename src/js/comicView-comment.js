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
                        <div className="collect menuBtn_top">添加收藏</div>
                        <div className="like menuBtn_top">喜歡</div>
                        <div className="share menuBtn_top">分享</div>
                    </div>
                    <div className="menu_bottom">
                        <div className="like_btn menuBtn_bottom">
                            <div className="like_icon"></div>
                            <div className="like_number">248</div>
                        </div>
                        <div className="comment_btn menuBtn_bottom">
                            <div className="comment-icon"></div>
                            <div className="comment_number">21</div>
                        </div>
                    </div>
                </div>
                <div className="comment_area">
                    <div className="commentBox">
                        <div className="comment_head">
                            <div className="userName">小雞特攻隊</div>
                            <div className="commentTime">2022年8月1日</div>
                            <div className="commentReport">檢舉</div>
                        </div>
                        <div className="comment_container">
                            <div className="icon_best">best!</div>
                            <div className="comment_contents">真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!</div>
                        </div>
                        <div className="comment_lick">
                            讚 30
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
export default Comment;