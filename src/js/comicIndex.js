import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicIndex-header.js";
import Side from "./comicIndex-side.js";
import List from "./comicIndex-list.js"
import Footer from "./comicIndex-footer.js";
import "../css/index.css"
class App extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <Side/>
                <List/>
                <Footer />
            </>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("root"));