import React from "react";
import "../css/comicIndex-list.css";
import Episode from "./comicIndex-episode.js";
let list=[];
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:list,
            step:1,
            error:null,
            isLoaded:false
        }
    }
    render(){
        const {error,isLoaded,list}=this.state;         
        if(error){
            return <div>Error{error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <ul>
                    {list.map((item,index)=>{
                        // if (index==0){
                        // }
                        return <Episode 
                        key={index} 
                        list={list[index]} 
                        no={index}/>
                    })}
                </ul>
            );
        }
    }
    componentDidMount(){
        let src="./comic-list.json";
        fetch(src)
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
}
export default List;
export {list};
