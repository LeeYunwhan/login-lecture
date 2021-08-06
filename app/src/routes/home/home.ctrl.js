"use strict"

const User = require('../../models/User.js')

const show = {
    home: (req,res)=>{
        res.render("home/index")
    },
    login: (req,res)=>{
        res.render("home/login")
    }
}

const process = {
    login: (req,res)=>{
        const user = new User(req.body)
        const response = user.login()
        return res.json(response)
    }
}

module.exports = { //外部ファイルとして漏出
    show, // show:showと同じ
    process
}
