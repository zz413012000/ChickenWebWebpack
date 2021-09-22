import React from "react";
import "../css/comicComment-inputComment.css"
function InputComment(){
    let number=33;
    return (
        <>
            <div className="InputComment">
                <div className="InputComment_header">
                    <a className="back-comicView" href="/comicView.html?id=3">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <div className="commentNumber">
                        留言 {number}
                    </div>                    
                    <div className="InputComment_header-cloud">
                        <img srcSet="img/comic-comment/topCloud.png"></img>
                    </div>
                </div>
                <form className="InputComment_inputArea">
                    <input className="inputNickname"></input>
                    <textarea className="inputComment"></textarea>
                    {/* <button type="submit">
                        <img srcSet="img/comic-comment/submit.PNG"></img>
                    </button> */}
                </form>
            </div>
        </>
    )
}
export default InputComment;