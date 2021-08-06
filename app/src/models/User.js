"use strict"

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body
    }
    login(){
        const body = this.body
        const {id, pw} = UserStorage.getUserInfo(body.id)
        
        if(id){
            if(id === body.id && pw === body.pw){
                return {success: true}
            }
            return {success: false, msg: "パスワード　間違い"}
        }
        return {success: false, msg: "存在しないID"}
    }
}

module.exports = User