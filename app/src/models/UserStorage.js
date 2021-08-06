"use strict"

class UserStorage{
    //★staticを付けると、newでオブジェクトかしなくてもデータ呼び込みできる
    static #users = {
        id:["ylee003", "redbull", "tomato"], //オブジェクト⇒ "id": "["lee", "kim", "tamura"]"
        pw:["123", "123", "123456"],
        name:["イ","マイク","木村"]
    }

    static getUsers(...fields){ //(...変数)⇒複数パラメータを一気に配列化：func("a", "b", "c")⇒["a","b","c"]
        const users = this.#users
        const newUsers = fields.reduce((_newUsers, _field)=>{
            if(users.hasOwnProperty(_field)){ //usersオブジェクト内に_filedと同じプロパーティ(key)があるのか
                _newUsers[_field] = users[_field]
            }
            return _newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(_id){
        const users = this.#users
        const idx = users.id.indexOf(_id)
        const userInfo = Object.keys(users).reduce((newUser, info)=>{ //配列.reduce((prev, curr)=> { return nextPrev }, {prev default})
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo
    }

    static save(userInfo){
        const users = this.#users
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.pw.push(userInfo.pw)
        console.log(users)
        return {success: true}
    }
}

module.exports = UserStorage