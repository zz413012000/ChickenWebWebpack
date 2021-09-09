import React from "react";
import ReactDOM from "react-dom";
import Header from "./comicView-header.js";
import Container from "./comicView-container.js";
import Comment from "./comicView-comment.js";
import FooterMenu  from "./comicView-footermenu.js";
import "../css/index.css";
// 將要看得漫畫回數儲存在網址，取得網址的字串，處理後取得要看的回述，並傳進組件裡面
var url = location.href;
var id;
if(url.indexOf('?')!=-1){  
    var ary1=url.split('?');
    // console.log("ary1",ary1);
    var ary2 = ary1[1].split('&');
    // console.log("ary2",ary2);
    var ary3 =ary2[0].split('#');
    // console.log("ary3",ary3);
    var ary4 =ary3[0].split('=');
    // console.log("ary4",ary4);
    id=ary4[1];
    // console.log("id",id);
}
function App(){
    return (
        <>
            <Header episode={id}/>
            <Container episode={id}/>
            <Comment episode={id}/>
            <FooterMenu episode={id}/>
        </>
    )
}
// class App extends React.Component{
//     render(){
//         return (
//             <>
//                 <Header episode={id}/>
//                 <Container episode={id}/>
//                 <Comment episode={id}/>
//                 <FooterMenu episode={id}/>
//             </>
//         );
//     }
// }
ReactDOM.render(<App/>,document.getElementById("root"));