"use strict"
const express = require("express")
const router = express.Router()
const ctrl  = require("./home.ctrl")

//RESTful API
//照会
router.get("/", ctrl.show.home)
router.get("/login", ctrl.show.login)
router.get("/register", ctrl.show.register)
//生成
router.post("/login", ctrl.process.login)
router.post("/register", ctrl.process.register)

module.exports = router//外部ファイルとして露出