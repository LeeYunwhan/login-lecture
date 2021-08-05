"use strict"

const home = (req,res)=>{
    res.render("home/index") 
}

const login = (req,res)=>{
    res.render("home/login")
}


module.exports = { //外部ファイルとして漏出
    home, // hello: helloと同じ
    login
}
