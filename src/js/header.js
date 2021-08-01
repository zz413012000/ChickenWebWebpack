import '../css/header.css';
import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <header>
                <div className="search-father">
                    <div className="search-child">
                        <input type="text" name="" id=""
                        placeholder="search"/>
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="search_pic">
                            <div class="img"></div>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;