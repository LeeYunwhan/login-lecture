"use strict"

const show = {
    home: (req,res)=>{
        res.render("home/index") 
    },
    login: (req,res)=>{
        res.render("home/login")
    }
}

const users = {
    id:["lee", "kim", "tamura"],
    pw:["123", "123", "123456"]
}

const process = {
    login: (req,res)=>{
        const id = req.body.id
        const pw = req.body.pw

        console.log(id, pw)
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id)
            if(users.pw[idx] === pw){
                return res.json({success: true, msg: "ログイン成功○"})
            }
        }
        return res.json({sucess: false, msg: "ログイン失敗X"})

    }
}

module.exports = { //外部ファイルとして漏出
    show, // show:showと同じ
    process
}
