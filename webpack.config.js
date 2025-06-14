const { watchFile } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            title:"Odin Resturant",
        })
    ],
    module:{
        rules:[
            {
                test:  /\.css$/i,
                use:  ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

        ]
    },
    devtool: "eval-source-map",
    devServer:{
        watchFiles: ["./src/template.html"]
    }
};