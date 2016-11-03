/// <reference path="../typings/index.d.ts" />


import {Aluno, Contacto, TipoContacto} from "../modelos/index";

export class Principal{
    alunos: Aluno[] = [];
    alunoAtual:KnockoutObservable<Aluno> = ko.observable(new Aluno(""));

    nomeAtual:KnockoutObservable<string>;
    contactoAtual: KnockoutObservable<string>;
    tipoContactoAtual: KnockoutObservable<TipoContacto>;
    
    
    
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