var path = require("path");

module.exports = {
    entry:{
        "app":path.join(__dirname,"../app/main.js")
    },
    output:{
        path:path.join(__dirname,"../static/js/"),
        filename:"[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                exclude:/node_module/,
                query:{
                    presets:["react","es2015"]
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(png|jpg)$/,
                loader:"url-loader?limit=8192"
            }
        ]
    }
}