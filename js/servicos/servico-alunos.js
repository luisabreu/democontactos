"use strict";
const index_1 = require("../modelos/index");
class ServicoAlunos {
    //simular web service com promise
    obtemTodos() {
        let alunos = [];
        let aluno1 = new index_1.Aluno("Luis Miguel Nunes Abreu");
        aluno1.adicionaContacto(index_1.Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(index_1.Contacto.criaTelefone("123123123"));
        alunos.push(aluno1);
        aluno1 = new index_1.Aluno("Rita");
        aluno1.adicionaContacto(index_1.Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(index_1.Contacto.criaTelefone("123123123"));
        alunos.push(aluno1);
        return Promise.resolve(alunos);
    }
}
exports.ServicoAlunos = ServicoAlunos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vydmljby1hbHVub3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNvcy9zZXJ2aWNvLWFsdW5vcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYix3QkFBNEMsa0JBQWtCLENBQUMsQ0FBQTtBQUcvRDtJQUNJLGlDQUFpQztJQUNqQyxVQUFVO1FBQ04sSUFBSSxNQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGdCQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0FBQ0wsQ0FBQztBQWRZLHFCQUFhLGdCQWN6QixDQUFBIn0=