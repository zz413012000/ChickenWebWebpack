import React from "react";
import "../css/comicView-comment.css";
let data="✨ 漫畫更新!!雞的顏值篇!! ✨\n💗鳥奴們總是能一眼辨認出自己的主子!💗\n鳥友敲碗的 「小雞評比篇01 」終於來啦！\n是說...文鳥到底要怎麼從外觀上分不同呢??\n\n之前看過有人可以一眼分出自己養的10隻蜥蜴，真是超厲害啊!🤩🤩";
let str=data.replace(/(\r\n)|(\n)/g,"<br/>");
function Comment(props){
    // let src="./comicView.html"+"?id="+(props.episode);
    let src="https://zz413012000.github.io/ChickenWebWebpack/dist/comicView.html?id="+(props.episode);
    console.log("src",src);
    let src2="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(src);
    console.log("src2",src2);
    return (
        <>
        <footer>
            <div className="creator">
                <div className="creator_name">脆脆雞。作家</div>
                <div 
                className="creator_note"
                dangerouslySetInnerHTML={{__html: str}}>
                </div>
            </div>
            <div className="comment">
                <div className="comment_menu">
                    <div className="menu_top">
                        <div className="collect menuBtn_top">添加收藏</div>
                        <div className="like menuBtn_top">
                            喜歡
                            <img srcSet="img/view/btn_like.png"></img>
                        </div>
                        <div className="share menuBtn_top fb-share-button" data-href={src} data-layout="button" data-size="large">
                            <a target="_blank"  className="fb-xfbml-parse-ignore">分享
                            </a>
                        </div>
                    </div>
                    <div className="menu_bottom">
                        <div className="like_btn menuBtn_bottom">
                            <div className="like_icon">
                                <img srcSet="img/view/yellowHeart.png"></img>
                            </div>
                            <div className="like_number">248</div>
                        </div>
                        <div className="comment_btn menuBtn_bottom">
                            <div className="comment-icon">
                                <img srcSet="img/view/comment.png"></img>
                            </div>
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
                            <div className="icon_best">
                                <img srcSet="img/view/best.png"></img>
                            </div>
                            <div className="comment_contents">真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!真是無法無天的雞仔!</div>
                        </div>
                        <div className="comment_like">
                            <img srcSet="img/view/like.png"></img> 30
                        </div>
                    </div>
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
                    <div className="comment_cloud">
                        <img srcSet="img/view/bottomCloud.png"></img>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
export default Comment;