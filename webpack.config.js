const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // 打包到什么文件
  output: {
    filename: "bundle.js",
  },
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, "www"),
    // 不压缩
    compress: false,
    port: 8080,
    // 虚拟打包的路径, bundle.js文件没有真正的生成
    publicPath: "/xuni/",
  },
};
