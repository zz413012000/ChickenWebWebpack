import React from"react";
import "../css/comicView-container.css";
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            list:[]
        }
    }
    render(){
        const {error,isLoaded,list}=this.state;
        console.log("list",list);
        if(error){
            return <div>Error:{error.message}</div>
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <>
                    <article>
                        {list.map((item,index)=>{
                            return (
                                <div key={index} className="img">
                                    <img srcSet={list[index]}></img>
                                </div>
                            );
                        })}
                    </article>
                </>
            )
        }
    }
    componentDidMount(){
        fetch("./comic-list.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                let currentEpisode=this.props.episode;
                let data=result[currentEpisode-1].viewSrc;
                console.log("data",data);
                this.setState({
                    isLoaded:true,
                    list:data
                });
            },
            (error)=>{
                console.log('Error: ', error);
                this.setState({
                    isLoaded:true,
                    error:error
                });
            }
        )
    }
}
// function Container(){
//     return (
//         <>
//             <article>
//                 {list.map((item,index)=>{
//                     return (
//                         <div key={index} className="img">
//                             <img srcSet={list[index]}></img>
//                         </div>
//                     )
//                 })}
//             </article>
//         </>
//     );
// }
export default Container;