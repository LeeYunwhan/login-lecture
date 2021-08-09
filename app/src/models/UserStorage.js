"use strict"

const fs = require("fs").promises


class UserStorage{
    static #getUserInfo(data, _id){
        const users = JSON.parse(data)
        const idx = users.id.indexOf(_id)
        const userInfo = Object.keys(users).reduce((newUser, info)=>{ //配列.reduce((prev, curr)=> { return nextPrev }, {prev default})
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo
    }


    static #getUsers(data, isAll ,fields){
        const users = JSON.parse(data)
        if(isAll) return users
        const newUsers = fields.reduce((_newUsers, _field)=>{
            if(users.hasOwnProperty(_field)){ //usersオブジェクト内に_filedと同じプロパーティ(key)があるのか
                _newUsers[_field] = users[_field]
            }
            return _newUsers
        }, {})
        return newUsers
    }

    //★staticを付けると、newでオブジェクトかしなくてもデータ呼び込みできる
    static getUsers(isAll, ...fields){ //(...変数)⇒複数パラメータを一気に配列化：func("a", "b", "c")⇒["a","b","c"]
        return fs
            .readFile("./src/databases/users.json")
            .then(data=>{
                return this.#getUsers(data, isAll, fields)
            })
            .catch(console.error)
    }

    /* 非同期 */
    //★宣言】Promise.then() ⇒　fsもfatch()と同じPromise
    //★定義】await +「returnしたpromise変数」
    static getUserInfo(_id){
        return fs
            .readFile("./src/databases/users.json")
            .then(data=>{
                return this.#getUserInfo(data, _id)
            })
            .catch(console.error)
    }

    static async save(userInfo){
        const users = await this.getUsers(true)
        if (users.id.includes(userInfo.id)){
            throw "すでに存在するIDです"
        }
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.pw.push(userInfo.pw)
        console.log("SEE :", users)
        fs.writeFile("./src/databases/users.json", JSON.stringify(users))
        return {success:true}
    }
}

module.exports = UserStorage