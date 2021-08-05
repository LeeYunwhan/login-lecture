"use strict"

const UserStorage = require("../../models/UserStorage.js")

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
        const id = req.body.id
        const pw = req.body.pw
        
        const users = UserStorage.getUsers("id", "pw")
        const response = {}
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id)
            if(users.pw[idx] === pw){
                response.success = true // {success: true}
                response.msg = "ログイン成功 ○"
                return res.json(response)
            }
        }
        response.success = false // {success: false}
        response.msg = "ログイン失敗 X"
        return res.json(response)
    }
}

module.exports = { //外部ファイルとして漏出
    show, // show:showと同じ
    process
}
