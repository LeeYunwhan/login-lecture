//モジュール
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//ルーティング
const home = require("./src/routes/home")

//★expressでテンプレートエンジン使うために必要な処理 app.set("KEY", KEYによった引数)
app.set("views", "./src/views") //@param : ("views", 経路)
app.set("view engine", "ejs") //@param : ("view engine", 拡張子)



/*ミドルウェア登録(fromルーティング)*/
//★ルートディレクトリ設定(リソース)
app.use(express.static(`${__dirname}/src/public`)) //__dirname : 現在ファイルの絶対パス C:～\app。 login.ejsの<script defer src="/js/home/login.js"></script>部分
//bodyParser使うための必要な処理
app.use(bodyParser.json()) //jsonパーシング許可
app.use(bodyParser.urlencoded({extended:true})) //urlデータで来る日本語、空白などに対応

//
app.use("/", home)

module.exports = app