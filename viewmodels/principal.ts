/// <reference path="../typings/index.d.ts" />


import {Aluno, Contacto, TipoContacto} from "../modelos/index";
import {ServicoAlunos} from "../servicos/servico-alunos";

export class Principal{
    filtro: KnockoutObservable<string>;
    
    alunosFiltrados: KnockoutComputed<Aluno[]>;
    alunos: KnockoutObservableArray<Aluno>;    

    alunoAtual:Aluno;

    nomeAtual:KnockoutObservable<string>;
    contactoAtual: KnockoutObservable<string>;
    tipoContactoAtual: KnockoutObservable<TipoContacto>;
    tipoContactoAtualEdicao: KnockoutComputed<string>;
    contactos: KnockoutObservableArray<Contacto>;

    emEdicao: boolean;
    
    constructor(private servico: ServicoAlunos){
         this.preparaBindings();
         this.iniciaAluno();
         this.servico.obtemTodos()
            .then(als => this.alunos(als) );
    }
    
    preparaBindings(){
        this.alunos = ko.observableArray([]);
        this.alunosFiltrados = ko.computed({
            read: () => this.alunos().filter(a => a.nome.toUpperCase().startsWith(this.filtro().toUpperCase()))
        })
        this.filtro = ko.observable("");
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        
        this.tipoContactoAtual = ko.observable(TipoContacto.Telefone);
        
        this.tipoContactoAtualEdicao = ko.computed({
            read: () => this.tipoContactoAtual().toString(),
            write: (val) => this.tipoContactoAtual(parseInt(val))
        }); 

        this.contactos = ko.observableArray([]);

    }

    selecionaAluno(aluno: Aluno){
        if(this.emEdicao){
            alert("Por favor, termine a edição do outro contacto.");
            return;
        }
        this.alunoAtual = aluno;
        this.alunos.remove(this.alunoAtual);
        
        this.iniciaFormularioEdicao();
        this.emEdicao = true;
    }

    removeContacto(ct:Contacto){
        if(!ct){
            return ;
        }
        this.contactos.remove(ct);      
    }

    adicionaContacto(){
        var ct = new Contacto(this.contactoAtual(), this.tipoContactoAtual());
        this.contactos.push(ct);
        this.limpaCamposContacto();
    }

    iniciaFormularioEdicao(){
        this.nomeAtual(this.alunoAtual.nome);        
        this.iniciaFormularioContactos();
    }

    iniciaFormularioContactos(){
        this.limpaCamposContacto();
        this.contactos(this.alunoAtual.obtemContactosParaEdicao());
    }
    
    limpaCamposContacto(){
        this.tipoContactoAtual(TipoContacto.Email);
        this.contactoAtual("");
    }

    cancelaEdicao(){
        if(!this.emEdicao){
            return;
        }
        this.alunos.push(this.alunoAtual);
        
        this.iniciaAluno();
        this.emEdicao = false;
    }

    gravaContacto(){
        if(!this.alunoAtual){
            return;
        }
        this.alunoAtual.nome = this.nomeAtual();
        this.alunoAtual.contactos = this.contactos();
        this.alunos.push(this.alunoAtual);

        this.iniciaAluno();
        this.emEdicao = false;        
    }

    iniciaAluno(){
        this.alunoAtual = new Aluno("");
        this.iniciaFormularioEdicao();
    }
}