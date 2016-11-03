/// <reference path="../typings/index.d.ts" />


import {Aluno, Contacto, TipoContacto} from "../modelos/index";
import {ServicoAlunos} from "../servicos/servico-alunos";

export class Principal{
    alunos: Aluno[] = [];
    alunoAtual:Aluno;

    nomeAtual:KnockoutObservable<string>;
    contactoAtual: KnockoutObservable<string>;
    tipoContactoAtual: KnockoutObservable<TipoContacto>;
    contactos: KnockoutObservable<Contacto[]>;
    
    constructor(private servico: ServicoAlunos){
         this.servico.obtemTodos()
            .then(als => this.alunos = als);
    }
    
    preparaBindings(){
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        this.tipoContactoAtual = ko.observable(TipoContacto.Telefone);
        this.contactos = ko.observable([]);
    }

    selecionaAluno(aluno: Aluno){
        this.alunoAtual = aluno;
        
        this.nomeAtual(this.alunoAtual.nome);
        this.contactoAtual("");
        this.tipoContactoAtual(TipoContacto.Email);
        this.contactos(this.alunoAtual.contactos);
    }
}