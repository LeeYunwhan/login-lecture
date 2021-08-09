"use strict"

const User = require('../../models/User.js')

const view = { //html.ejsレンダリング
    //オブジェクト関数化
    home: (req,res)=>{
        res.render("home/index")
    },
    login: (req,res)=>{
        res.render("home/login")
    },
    register: (req,res)=>{
        res.render("home/register")
    }
}

const process = {
    login: async (req,res)=>{
        const user = new User(req.body)
        const response = await user.login()
        return res.json(response)
    },
    register: async (req,res)=>{
        const user = new User(req.body)
        const response = await user.register()
        return res.json(response)
    },
}

module.exports = { //外部ファイルとして漏出
    show: view, // show:showと同じ
    process
}