import React from "react";
import ReactDOM from "react-dom";
import Comment_menu from"./Comment_menu.js";
import CommentBox from "./CommentBox.js";
function App(){
    return (
        <>
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