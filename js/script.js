const btn = document.querySelector('.botao')
const usuario = document.querySelector('[type=text]')
const senha = document.querySelector('[type=password]')
const form = document.querySelector('.login')

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
    window.alert(`Você entrou com o usuario:${usuario.value} e a senha${senha.value}`)
}
