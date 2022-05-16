document.querySelector('#btnSenha').addEventListener('click', () => {

    // Recuperar o elemento HTML que receberá a Senha

    getSenha = document.querySelector('#senha');
    const caracteres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];


    let novaSenha = '';
    //For para gerar a senha sendo que tenho 67 caracteres
    for (let i = 0; i < 20; i++) {
        //Sortear um numero que representa o indice do array, e não sera pego o caractere
        let numero = Math.round(Math.random() * 66)
        //Montar a senha, atribuindo o conteudo com o indice a variavel novaSenha


        novaSenha += caracteres[numero]


        //Exibindo a senha na page

    }

    getSenha.textContent = novaSenha

});

// Função copia para area de trasferencia

//document.execCommand('copy') seria utilizado assim, foi substituida pela API da area de trasferencia, adicionada aos navegadores, por ser Api, seus metodos e funcionalidades sao proprias, entaao podemos usar para fazer alguma coisa apos suaexecução, para copiar o text, use o metodo writeText, sendo disponivel no objeto navigator

document.querySelector('#btnCopia').addEventListener('click', () => {

    const senha = document.querySelector('#senha').innerText;

    if (senha.length == 0) {
        alert('Gerar a senha')
    } else {

        if (navigator.clipboard) {
            navigator.clipboard.writeText(senha).then(() => {
                alert('Senha Copiada')
            })

        }

    }

})