import React from "react";
import "../css/comicIndex-list.css";
import Episode from "./comicIndex-episode.js";
// let src="./comic-list.json";
// let list;
// fetch(src).then(function(response){
//     return response.json();
// }).then(function(result){
//     list=result;
// })
let list=[
    {
        "title":"［第一話］雞的顏值篇！",
        "imgsrc":"img/comic/list/1.png"
    },
    {
        "title":"［第二話］雞的命名篇",
        "imgsrc":"img/comic/list/2.png"
    },
    {
        "title":"［第三話］雞的教育篇",
        "imgsrc":"img/comic/list/3.png"
    },
    {
        "title":"［第四話］瘋子QQ篇",
        "imgsrc":"img/comic/list/4.png"
    },
    {
        "title":"［第五話］雞的邊緣果汁篇",
        "imgsrc":"img/comic/list/5.png"
    }
]
class List extends React.Component{
    render(){
        return (
            <ul>
                {list.map((item,index)=>{
                    console.log("index",index);
                    return <Episode 
                    key={index} 
                    data={list[index]} 
                    no={index}/>
                })}
            </ul>
        );
    }
}
export default List;
export {list};
