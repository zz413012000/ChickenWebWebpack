const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        main:'./src/js/main.js',
        comicIndex:'./src/js/comicIndex.js',
        comicView:'./src/js/comicView.js',
        comicComment:'./src/js/comicComment.js'
    },
    output:{
        filename:"js/[name].js",
        path:path.resolve(__dirname,"dist"),
    },
    mode:"development",
    devServer:{
        // devServer 的根目錄
        contentBase:"./dist",
        port: 9000,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                type:"asset",
                //解析
                parser: {
                  //轉base64的条件
                  dataUrlCondition: {
                    maxSize: 25 * 1024, // 25kb
                  }
                },
                generator:{ 
                  filename:'img/[name].[hash:6][ext]'
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks:["main"],
            title:"香雞八方魔王",
            filename:"index.html",
            template:"./src/index.html"
        }),
        new HtmlWebpackPlugin({
            chunks:["comicIndex"],
            title:"香雞八方魔王",
            filename:"comicIndex.html",
            template:"./src/comicIndex.html"
        }),
        new HtmlWebpackPlugin({
            chunks:["comicView"],
            title:"香雞八方魔王",
            filename:"comicView.html",
            template:"./src/comicView.html"            
        }),
        new HtmlWebpackPlugin({
            chunks:["comicComment"],
            title:"香雞八方魔王",
            filename:"comicComment.html",
            template:"./src/comicComment.html"            
        }),
    ]
}