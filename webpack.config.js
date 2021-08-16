const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        main:'./src/js/main.js',
        comicIndex:'./src/js/comicIndex.js',
        comicView:'./src/js/comicView.js'
    },
    output:{
        filename:"js/[name].js",
        path:path.resolve(__dirname,"dist"),
        publicPath: '/ChickenWebWebpack/dist/',
    },
    mode:"development",
    devServer:{
        contentBase:"./dist"
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
                  //转base64的条件
                  dataUrlCondition: {
                    maxSize: 25 * 1024, // 25kb
                  }
                },
                generator:{ 
                  //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                  filename:'img/[name].[hash:6][ext]',
                  //打包后对资源的引入，文件命名已经有/img了
                  publicPath:'./'
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
        })
    ]
}