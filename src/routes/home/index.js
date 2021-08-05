"use strict"
const express = require("express")
const router = express.Router()
const ctrl  = require("./home.ctrl")

//ejsファイルを開く(.ejsは省略可)
router.get("/", ctrl.home)
router.get("/login", ctrl.login)

module.exports = router//外部ファイルとして露出