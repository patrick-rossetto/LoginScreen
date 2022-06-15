const btn = document.querySelector('#botao')
const usuario = document.querySelector('#txtUsuario')
const senha = document.querySelector('#txtSenha')
const form = document.querySelector('#formLogin')

function verificadora(input, input2){
    var preenchido = false
    if(input.value != '' && input2.value != ''){
        var preenchido = true
    }
    return preenchido
}
    
form.onkeyup = () =>{ //verifica
    if(verificadora(usuario, senha)){
        btn.style.visibility = 'visible'
    }else{
        btn.style.visibility = 'hidden'
    }
}

btn.onclick = e =>{
    e.preventDefault()
    window.alert(`Foi digitado o usuario: ${usuario.value} e a senha: ${senha.value}`)
}
