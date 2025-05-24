class Contact {

    // Método Construtor
    constructor(){
        this.name = null;
        this.email = null;
        this.tel = null;
        this.message = null;
        this.dt_cad = null;
        this.age = null;
        this.tel_tip = null;
    }

    // Método específicio da classe Contato
    Send(event){
        event.preventDefault(); // Impedir uso padrão do form
        let errors = '';
        this.name = document.getElementById('name').value;
        this.email = document.getElementById('email').value;
        this.tel = document.getElementById('tel').value;
        this.message = document.getElementById('message').value;
        this.age = document.getElementById('age').value;
        this.tel_tip = "Não selecionado";

        const options = document.getElementsByName('tel_tip');
        for (i = 0; (i < options.length); i++){
            if(options[i].checked){
                this.tel_tip = options[i].value;
                break;
            }
        }

        // Verificar se o é um número
        if(/^\d+$/.test(this.name)){
            errors += 'O nome não pode ser exclusivamente numérico.\n';
        }

        // Verificar se o email foi preenchido
        if(this.email == ''){
            errors += 'O email deve ser preenchido.\n';
        }

        // Verificar se o telefone foi preenchido
        if(this.tel == ''){
            errors += 'O fone deve ser preenchido.\n';
        }

        // Verificar se a mensagem foi preenchida
        if(this.message == ''){
            errors += 'A mensagem deve ser preenchida.\n'
        }

        if(errors != ''){
            alert("Os seguintes campos apresentam erro: "+ errors)
        }

        // Criando a tabela com referência ao tbody
        let table = document.getElementById('grid_dates');

        // Inserindo nova linha na tabela
        let line = table.insertRow();
        line.insertCell(0).innerHTML = this.name;
        line.insertCell(1).innerHTML = this.email;
        line.insertCell(2).innerHTML = this.tel;
        line.insertCell(3).innerHTML = this.message;
        line.insertCell(4).innerHTML = this.age;
        line.insertCell(5).innerHTML = this.tel_tip;
        line.insertCell(6).innerHTML = `<td>
                           <button onClick="Edit()">Editar</button>
                           <button onClick="Delete()">Deletar</button>
                           </td>`;
    }

    Edit(){
        alert('Edição está em construção');
    }

    Delete(){
        alert('Deletar está em construção');
    }
}

contact = new Contact();

function Send(){
    let user = '2025';
    const alerted = 'Você está na página de contato'
    let year = '2025';

    if (user === year) {
        alert('Dado inválido!')
    }

    alert(alerted + ' de ' + user + ' em ' + year)
}