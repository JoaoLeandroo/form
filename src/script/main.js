let login = document.querySelector("#login")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let repeatSenha = document.querySelector("#repeat-senha")
const buttonCheck = document.querySelector(".button-check")
const form = document.querySelector(".form-login")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(login.value.length <= 0) login.style.border = "2px solid red"
    if(email.value.length <= 0) email.style.border = "2px solid red"
    if(senha.value != repeatSenha.value) {
        senha.style.border = "2px solid red"
        repeatSenha.style.border = "2px solid red"
        return
    }
        

    if(login.value === "" || email.value === "" || senha.value === "" || repeatSenha.value === "") {
        alert("Preencha todos os campos.")
        return
    }
    

    const dados = {
        userLogin: login.value,
        userEmail: email.value,
        userSenha: senha.value,
        userRepeatSenha: repeatSenha.value
    }

    console.log(dados)

    login.value = ""
    email.value = ""
    senha.value = ""
    repeatSenha.value = ""

    login.style.border = ""
    email.style.border = ""
    senha.style.border = ""
    repeatSenha.style.border = ""

    alert("Dados Enviados com Sucesso!")
})
