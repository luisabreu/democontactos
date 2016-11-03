"use strict";


import {Aluno, Contacto, TipoContacto} from "../modelos/index";


export class ServicoAlunos{    
    //simular web service com promise
    obtemTodos():Promise<Aluno[]>{
        let alunos: Aluno[] = [];
        let aluno1 = new Aluno("Luis");
        aluno1.adicionaContacto(Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(Contacto.criaTelefone("123123123"));
        alunos.push(aluno1);
        aluno1 = new Aluno("Rita");
        aluno1.adicionaContacto(Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(Contacto.criaTelefone("123123123"));
        alunos.push(aluno1);
        return Promise.resolve(alunos);
    }
}