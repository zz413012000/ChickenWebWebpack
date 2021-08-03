import "./css/index.css"
import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/index-header.js";
import Container from "./js/index-container.js";
import Footer from "./js/index-footer.js"

class App extends React.Component{
    render(){
        return (
            <>
            <Header/>
            <Container/>
            <Footer/>
            </>
        );
    }
};
ReactDOM.render(<App/>,document.getElementById("root"));