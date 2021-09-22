import React from "react";
import Comment_menu from"./Component/Comment_menu.js";
import CommentBox from "./Component/CommentBox.js";
import "../css/comicView-comment.css";
let data="✨ 漫畫更新!!雞的顏值篇!! ✨\n💗鳥奴們總是能一眼辨認出自己的主子!💗\n鳥友敲碗的 「小雞評比篇01 」終於來啦！\n是說...文鳥到底要怎麼從外觀上分不同呢??\n\n之前看過有人可以一眼分出自己養的10隻蜥蜴，真是超厲害啊!🤩🤩";
let str=data.replace(/(\r\n)|(\n)/g,"<br/>");
function Comment(props){
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
                <Comment_menu/>
                <div className="comment_area">
                    <CommentBox/>
                    <CommentBox/>
                    <CommentBox/>
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