import React from "react";
import ReactDOM from "react-dom";
import InputComment from "./comicComment-inputComment.js"
import Comment_menu from"./Component/Comment_menu.js";
import CommentBox from "./Component/CommentBox.js";
function App(){
    return (
        <>
            <InputComment/>
            <div className="comment">
                <Comment_menu/>
                <div className="comment_area">
                    <CommentBox/>
                    <CommentBox/>
                    <CommentBox/>
                    <CommentBox/>
                    <CommentBox/>
                </div>
            </div>
        </>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));