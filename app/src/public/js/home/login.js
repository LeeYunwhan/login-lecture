"use strict"
console.log("-------LOGIN-------")

const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const loginBtn = document.querySelector("#button")

loginBtn.addEventListener("click", login)

function login(){
    const req = {
        id: id.value, 
        pw: pw.value
    }

    fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(req) //req.body受け取る
    })
    .then(res => res.json())
    .then(json => {
        if(json.success)
            location.href = "/" //ページ移動
        else
            alert(json.msg)
    })
    .catch((err)=>{
        console.error(new Error("ログイン中にエラー発生"))
    })
}