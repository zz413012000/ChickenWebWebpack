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
    _isMounted=false;
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
        this._isMounted=true;
        let src="./comic-list.json";
        fetch(src)
            .then(res=>res.json())
            .then(
                (result)=>{
                    if(this._isMounted) {
                        this.setState({
                            isLoaded:true,
                            list:result
                        })
                    }
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error:error
                    })
                }
            )
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
}
export default List;
export {list};
