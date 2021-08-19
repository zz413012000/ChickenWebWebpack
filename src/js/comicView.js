import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicView-header.js";
import Container from "./comicView-container.js";
import Comment from "./comicView-comment.js";
import "../css/index.css";
var url = location.href;
console.log("url",url);
if(url.indexOf('?')!=-1){
    var ary1=url.split('?');
    var ary2 = ary1[1].split('&');
    var ary3 =ary2[0].split('=');
    var id=ary3[1];
}
class App extends React.Component{
    render(){
        return (
            <>
                <Header episode={id}/>
                {/* <Container episode={id}/> */}
                <Comment/>
            </>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));