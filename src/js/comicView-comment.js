import React from "react";
import "../css/comicView-comment.css";
function Comment(){
    return (
        <>
        <footer>
            <div className="creator">
                <div className="creator_name">脆脆雞。作家</div>
                <div className="creator_note">✨ 漫畫更新!!雞的顏值篇!! ✨<br/>
                    💗鳥奴們總是能一眼辨認出自己的主子!💗<br/>
                    鳥友敲碗的 「小雞評比篇01 」終於來啦！<br/>
                    是說...文鳥到底要怎麼從外觀上分不同呢??<br/>
                    之前看過有人可以一眼分出自己養的10隻蜥蜴，真是超厲害啊!🤩🤩
                </div>
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