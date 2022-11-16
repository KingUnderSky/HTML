//  Classe pessoa
function Pessoa(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}

//  Url do backend
urlAPI = "https://630c0ff583986f74a7b96f54.mockapi.io/exercicio06";

//  Variáveis de input
nome = "inputNome";
email = "inputEmail";
telefone = "inputTelefone";

//  Criando lista de pessoas
var pessoas = new Array()

//  Função que salva uma pessoa na lista de pessoas
function salvar() {
    // seperando as variaveis para salvar na lista de pessoas
    let nomeInput = document.getElementById(this.nome).value
    let emailInput = document.getElementById(this.email).value
    let telInput = document.getElementById(this.telefone).value

    if(nomeInput === "" || emailInput === "" || telInput === "")
    {
        window.alert("Error ao salvar: " + "Preencha os campos vazios.");        
        return;
    }
    
    //  Criando objeto do tipo pessoa para salvar na lista
    let pessoa = new Pessoa(nomeInput, emailInput, telInput)

    // inserindo o objeto na lista de pessoas
    pessoas.push(pessoa)
    atualizarTabela()
}

// Função que atualiza a tabela
function atualizarTabela() {
    tbody.innerHTML = ''
    for (let i = 0; i < pessoas.length; i++) {
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')

        var txt1 = document.createTextNode(pessoas[i].nome)
        var txt2 = document.createTextNode(pessoas[i].email)
        var txt3 = document.createTextNode(pessoas[i].telefone)

        td1.appendChild(txt1)
        td2.appendChild(txt2)
        td3.appendChild(txt3)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tbody.appendChild(tr)
        document.getElementById(this.nome).value = '';
        document.getElementById(this.email).value = '';
        document.getElementById(this.telefone).value = '';
    }
}

//  Função que limpa tabela
function limparTabela() {
    var tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
}

//  Função que salva os dados da tabela no mockapi
function salvarBackend() {
    if(this.pessoas.length <= 0)
        window.alert("Error ao salvar: " + "Não há usuários salvos.");
    else
        this.pessoas.forEach(function (obj) {
        fetch(this.urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then((response) => response.json())
        .then(() => {
            window.alert("Lista salva com sucesso!!")
            limparTabela();
        }).catch((error) => {
            window.alert("Error ao salvar: " + error)
        })
    })
}
