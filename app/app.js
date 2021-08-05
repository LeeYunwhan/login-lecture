//モジュール
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//ルーティング
const home = require("./src/routes/home")

//アプリセット
app.set("views", "./src/views") //経路
app.set("view engine", "ejs") //拡張子

//ミドルウェア登録(fromルーティング)
app.use(express.static(`${__dirname}/src/public`)) //__dirname : app.jsのパス
app.use(bodyParser.json()) //jsonパーシング許可
app.use(bodyParser.urlencoded({extended:true})) //urlデータで来る日本語、空白などに対応
app.use("/", home)

module.exports = app