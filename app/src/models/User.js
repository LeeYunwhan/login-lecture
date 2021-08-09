"use strict"

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body
    }
    async login(){
        const client = this.body
        const {id, pw} = await UserStorage.getUserInfo(client.id)
        console.log(id, pw)
        if(id){
            if(id === client.id && pw === client.pw){
                return {success: true}
            }
            return {success: false, msg: "パスワード　間違い"}
        }
        return {success: false, msg: "存在しないID"}
    }

    async register(){
        const client = this.body
        try{
            const response = await UserStorage.save(client)
            return response
        }
        catch(err){
            const a = {success:false, msg:err}
            console.log(typeof a.msg)
            return a
        }
    }
}

module.exports = User