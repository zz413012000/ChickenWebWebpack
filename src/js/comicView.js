import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicView-header.js";
import Container from "./comicView-container.js";
import Comment from "./comicView-comment.js";
import "../css/index.css";
var url = location.href;
console.log("url",url);
if(url.indexOf('?')!=-1){
    var ary1=url.split('?'); //分出
    console.log("ary1",ary1);
    var ary2 = ary1[1].split('&');
    console.log("ary2",ary2);
    var ary3 =ary2[0].split('=');
    console.log("ary3",ary3);
    var id=ary3[1]
    console.log("id",id);
}
class App extends React.Component{
    render(){
        return (
            <>
                <Header episode={id}/>
                <Container/>
                <Comment/>
            </>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));