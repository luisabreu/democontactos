/// <reference path="../typings/index.d.ts" />


import {Aluno, Contacto, TipoContacto} from "../modelos/index";

export class Principal{
    alunos: Aluno[] = [];
    alunoAtual:KnockoutObservable<Aluno> = ko.observable(new Aluno(""));

    nomeAtual:KnockoutObservable<string>;
    contactoAtual: KnockoutObservable<string>;
    tipoContactoAtual: KnockoutObservable<TipoContacto>;
    
    carregaAlunos(){
        let aluno1 = new Aluno("Luis");
        aluno1.adicionaContacto(Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(Contacto.criaTelefone("123123123"));
        this.alunos.push(aluno1);
        aluno1 = new Aluno("Rita");
        aluno1.adicionaContacto(Contacto.criaEmail("teste@mail.pt"));
        aluno1.adicionaContacto(Contacto.criaTelefone("123123123"));
        this.alunos.push(aluno1);
    }
    
    preparaBindings(){
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        this.tipoContactoAtual = ko.observable(TipoContacto.Telefone);
    }

    

    
}