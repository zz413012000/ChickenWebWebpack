const path=require("path");
module.exports={
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        publicPath: '/dist/',
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
                      name: '[name].[ext]',  
                      publicPath: './img',  
                      emitFile: false  
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
    }
}