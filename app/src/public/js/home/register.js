"use strict"
console.log("-------REGIGSTER-------")

const id = document.querySelector("#id")
const name = document.querySelector("#name")
const pw = document.querySelector("#pw")
const confirmPw = document.querySelector("#confirm-pw")
const registerBtn = document.querySelector("#button")

registerBtn.addEventListener("click", register)

function register(){
    if(!id.value) return alert("IDを入力してください。")
    if(pw.value !== confirmPw.value)
        return alert("【ログリン失敗】\nパスワードが一致しません！")


    const req = {
        id: id.value, 
        anme: name.value,
        pw: pw.value,
    }
    fetch("/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(req) //req.body受け取る
    })
    .then(res => res.json())
    .then(json => {
        if(json.success)
            location.href = "/login" //ページ移動
        else
            alert(json.msg)
    })
    .catch((err)=>{
        console.error(new Error(err))
    })
}