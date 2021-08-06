"use strict"
console.log("-------REGIGSTER-------")

const id = document.querySelector("#id")
const name = document.querySelector("#name")
const pw = document.querySelector("#pw")
const confirmPw = document.querySelector("#confirm-pw")
const registerBtn = document.querySelector("#button")

registerBtn.addEventListener("click", register)

function register(){
    const req = {
        id: id.value, 
        anme: name.value,
        pw: pw.value,
        confirmPw: confirmPw.value
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
        console.error(new Error("新規登録中にエラー発生"))
    })
}