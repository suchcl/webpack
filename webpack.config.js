let path = require("path");
module.exports = {
    mode: "development", // 有production和development两个选项
    entry: "./src/index.js",
    output: {
        filename: "bundule.js",
        path: path.resolve(__dirname, "dist") // 路径必须是一个绝对路径，可以使用node的path模块，node的内置模块，不需要安装
    }
};