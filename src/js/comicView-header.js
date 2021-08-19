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
                <header>
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
// const Header=(props)=>{
//     const [error,setError]=useState(null);
//     const [isLoaded,setIsLoaded]=useState(false);
//     const [list,setList]=useState([]);
//     console.log("--- invoke function component ---");
//     useEffect(()=>{
//         console.log("useEffect");
//         fetch("./comic-list.json")
//             .then(res=>{
//                 return res.json()
//             })
//             .then(
//                 (result)=>{
//                     setIsLoaded(true);
//                     setList(result);
//                 },
//                 (error)=>{
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             );
//     },[]);
//     if(error){
//         return <div>Error:{error.message}</div>;
//     }else if(!isLoaded){
//         return <div>Loading...</div>
//     }else{
//         let data=list;
//         console.log("list",list);
//         // console.log("list[0]",list[0]);
//         // console.log("data[0]",data[0][0]);
//         // console.log("data[0]",data[0].title);
//         console.log("isLoaded",isLoaded);
//         return ( 
//         <h1>Hello</h1>
//             // <>
//             //     <header>
//             //         <div className="icon"></div>
//             //         {/* <div className="title">{list[props.episode-1].title}</div> */}
//             //         <div className="title">{list[1].title}</div>
//             //         <div className="btn"></div>
//             //     </header>
//             // </>
//         );
//     }
// }
export default Header;