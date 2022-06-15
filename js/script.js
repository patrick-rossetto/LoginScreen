const btn = document.getElementById('botao')
const usuario = document.getElementById('txtUsuario')
const senha = document.getElementById('txtSenha')
const form = document.getElementById('formLogin')

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
