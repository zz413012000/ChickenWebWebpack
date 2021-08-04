import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicIndex-header.js"
import "../css/index.css"
class App extends React.Component{
    render(){
        return (
            <>
                <Header/>
            </>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));