import React from "react";
import "../../css/Comment_menu.css"
function Comment_menu(){    
    let src=location.href;
    let src2="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(src);
    return (
        <>
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
                        <a  href="./comicComment.html">
                        <div className="comment-icon">
                            <img srcSet="img/view/comment.png"></img>
                        </div>
                        </a>
                        <div className="comment_number">21</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Comment_menu;