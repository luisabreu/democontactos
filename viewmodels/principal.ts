/// <reference path="../typings/index.d.ts" />


import {Aluno, Contacto, TipoContacto} from "../modelos/index";
import {ServicoAlunos} from "../servicos/servico-alunos";

export class Principal{
     alunos: KnockoutObservableArray<Aluno>;
    alunoAtual:Aluno;

    nomeAtual:KnockoutObservable<string>;
    contactoAtual: KnockoutObservable<string>;
    tipoContactoAtual: KnockoutObservable<TipoContacto>;
    contactos: KnockoutObservableArray<Contacto>;
    
    constructor(private servico: ServicoAlunos){
         this.preparaBindings();
         this.servico.obtemTodos()
            .then(als => this.alunos(als) );
    }
    
    preparaBindings(){
        this.alunos = ko.observableArray([]);
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        this.tipoContactoAtual = ko.observable(TipoContacto.Telefone);
        this.contactos = ko.observableArray([]);
    }

    selecionaAluno(aluno: Aluno){
        this.alunoAtual = aluno;
        
        this.nomeAtual(this.alunoAtual.nome);
        this.contactoAtual("");
        this.tipoContactoAtual(TipoContacto.Email);
        this.contactos(this.alunoAtual.contactos);
    }

    removeContacto(ct:Contacto){
        if(!ct){
            return ;
        }
        this.alunoAtual.removeContacto(ct);
        this.contactos(this.alunoAtual.contactos);
        const aux = this.alunos();
        this.alunos([]);
        this.alunos(aux);
    }

    limpaFormulario(){
        this.nomeAtual("");
        this.contactoAtual("");
        this.tipoContactoAtual(TipoContacto.Email);
        this.contactos([]);
    }
}