"use strict"

class UserStorage{
    static #users = {
        id:["lee", "kim", "tamura"],
        pw:["123", "123", "123456"],
        age:["19","12","31"]
    }

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((_newUsers, _field)=>{
            if(users.hasOwnProperty(_field)){
                _newUsers[_field] = users[_field]
            }
            return _newUsers
        }, {})
        return newUsers
    }
}

module.exports = UserStorage