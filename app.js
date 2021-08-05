//モジュール
const express = require("express")
const app = express()

//ルーティング
const home = require("./routes/home")

//アプリセット
app.set("views", "./views") //経路
app.set("view engine", "ejs") //拡張子

//ミドルウェア登録(fromルーティング)
app.use("/", home)

module.exports = app

