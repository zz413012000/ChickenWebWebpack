import React from "react"
import "../../css/CommentBox.css";
function CommentBox(){
    return (
        <>
            <div className="commentBox">
                <div className="comment_head">
                    <div className="userName">小雞特攻隊</div>
                    <div className="commentTime">2022年8月1日</div>
                    <div className="commentReport">檢舉</div>
                </div>
                <div className="comment_container">
                    <div className="icon_best">
                        <img srcSet="img/view/best.png"></img>
                    </div>
                    <div className="comment_contents">真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!</div>
                </div>
                <div className="comment_like">
                    <img srcSet="img/view/like.png"></img> 30
                </div>
            </div>
        </>
    );
}
export default CommentBox;