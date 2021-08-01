import "./css/index.css"
import React from "react";
import ReactDOM from "react-dom"
import Header from "./js/header.js"

class App extends React.Component{
    render(){
        return (
            <>
            <Header/>
            </>
        );
    }
};
ReactDOM.render(<App/>,document.getElementById("root"));