const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        main:'./src/js/main.js',
        comicIndex:'./src/js/comicIndex.js'
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
                test: /\.(png|jpg|gif|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'img/[name].[ext]',
                          publicPath: './img',
                          emitFile: true,
                        }  
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|gif|jpeg)$/,
            //     use: [{
            //         loader:'url-loader',
            //         options: {
            //         limit:1024,                    
            //         name:'img/[name].[hash:8].[ext]'                    
            //       }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks:["main"],
            title:"首頁",
            filename:"index.html",
            template:"./src/index.html"
        }),
        new HtmlWebpackPlugin({
            chunks:["comicIndex"],
            title:"ComicIndex",
            filename:"comicIndex.html",
            template:"./src/comicIndex.html"
        })
    ]
}