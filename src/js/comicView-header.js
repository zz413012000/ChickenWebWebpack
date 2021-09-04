import React ,{useState,useEffect} from "react";
import "../css/comicView-header.css";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            list:[],
            on:false
        };
    }
    componentDidMount(){
        fetch("./comic-list.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded:true,
                    list:result
                })
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error:error
                })
            }
        )
    }
    toggleMenu(){
        this.setState({on:!this.state.on});
    }
    render(){
        const {error,isLoaded,list}=this.state;
        if(error){
            return <div>Error:{error.message}</div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
            <>
                <header id="header">
                    <div className="icon">
                        <img srcSet="img/view/icon-yellow.png"></img>
                    </div>
                    <div className="title"># {this.props.episode} {list[this.props.episode-1].title}</div>
                    <div className="btn" onClick={this.toggleMenu.bind(this)}>
                        <img srcSet="img/view/header_btn.png"></img>
                        <div className={this.state.on?"btn_menu btn_menu-on":"btn_menu"}>
                            <div className="btn_share">
                                分享
                                <img srcSet="img/view/btn_share.png"></img>
                            </div>
                        </div>
                    </div>
                </header>
            </>
            );
        }
    }
}
export default Header;