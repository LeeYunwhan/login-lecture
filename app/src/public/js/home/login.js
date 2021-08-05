"use strict"
console.log("HAHA HOHO!")

const id = document.querySelector("#id")
const pw = document.querySelector("#pw")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", (ev)=>login())

function login(){
    const req = {id: id.value, pw: pw.value}
    console.log(req)

    fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
        body: JSON.stringify(req)
    })
}