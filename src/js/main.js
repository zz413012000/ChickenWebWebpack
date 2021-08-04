import "../css/index.css"
import React from "react";
import ReactDOM from "react-dom";
import Header from "./index-header.js";
import Container from "./index-container.js";
import Footer from "./index-footer.js"

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