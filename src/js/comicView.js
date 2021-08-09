import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicView-header.js";
import Container from "./comicView-container.js";
import Comment from "./comicView-comment.js";
import "../css/index.css";
class App extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <Container/>
                <Comment/>
            </>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));