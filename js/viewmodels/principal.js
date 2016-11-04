/// <reference path="../typings/index.d.ts" />
"use strict";
const index_1 = require("../modelos/index");
class Principal {
    constructor(servico) {
        this.servico = servico;
        this.preparaBindings();
        this.iniciaAluno();
        this.servico.obtemTodos()
            .then(als => this.alunos(als));
    }
    preparaBindings() {
        this.alunos = ko.observableArray([]);
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        this.tipoContactoAtual = ko.observable(0 /* Telefone */);
        this.tipoContactoAtualEdicao = ko.computed({
            read: () => this.tipoContactoAtual().toString(),
            write: (val) => this.tipoContactoAtual(parseInt(val))
        });
        this.contactos = ko.observableArray([]);
    }
    selecionaAluno(aluno) {
        if (this.emEdicao) {
            alert("Por favor, termine a edição do outro contacto.");
            return;
        }
        this.alunoAtual = aluno;
        this.alunos.remove(this.alunoAtual);
        this.iniciaFormularioEdicao();
        this.emEdicao = true;
    }
    removeContacto(ct) {
        if (!ct) {
            return;
        }
        this.contactos.remove(ct);
    }
    adicionaContacto() {
        var ct = new index_1.Contacto(this.contactoAtual(), this.tipoContactoAtual());
        this.contactos.push(ct);
        this.limpaCamposContacto();
    }
    iniciaFormularioEdicao() {
        this.nomeAtual(this.alunoAtual.nome);
        this.iniciaFormularioContactos();
    }
    iniciaFormularioContactos() {
        this.limpaCamposContacto();
        this.contactos(this.alunoAtual.obtemContactosParaEdicao());
    }
    limpaCamposContacto() {
        this.tipoContactoAtual(1 /* Email */);
        this.contactoAtual("");
    }
    cancelaEdicao() {
        if (!this.emEdicao) {
            return;
        }
        this.alunos.push(this.alunoAtual);
        this.iniciaAluno();
        this.emEdicao = false;
    }
    gravaContacto() {
        if (!this.alunoAtual) {
            return;
        }
        this.alunoAtual.nome = this.nomeAtual();
        this.alunoAtual.contactos = this.contactos();
        this.alunos.push(this.alunoAtual);
        this.iniciaAluno();
        this.emEdicao = false;
    }
    iniciaAluno() {
        this.alunoAtual = new index_1.Aluno("");
        this.iniciaFormularioEdicao();
    }
}
exports.Principal = Principal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbmNpcGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdmlld21vZGVscy9wcmluY2lwYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUc5Qyx3QkFBNEMsa0JBQWtCLENBQUMsQ0FBQTtBQUcvRDtJQVlJLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTthQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUMsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQXFCLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDL0MsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENB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