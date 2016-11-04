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
        this.alunosFiltrados = ko.computed({
            read: () => this.alunos().filter(a => a.nome.toUpperCase().startsWith(this.filtro().toUpperCase()))
        });
        this.filtro = ko.observable("");
        this.nomeAtual = ko.observable("").extend({
            required: true
        });
        this.contactoAtual = ko.observable("").extend({
            required: true
        });
        this.tipoContactoAtual = ko.observable(0 /* Telefone */);
        this.tipoContactoAtualEdicao = ko.computed({
            read: () => {
                return this.tipoContactoAtual().toString();
            },
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
    novoContacto() {
        if (this.emEdicao) {
            alert("Por favor, termine a edição do outro contacto.");
            return;
        }
        this.iniciaAluno();
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
        $("#registo").focus();
    }
    iniciaFormularioEdicao() {
        this.nomeAtual(this.alunoAtual.nome);
        this.iniciaFormularioContactos();
        $("#nome").focus();
    }
    iniciaFormularioContactos() {
        this.limpaCamposContacto();
        this.contactos(this.alunoAtual.obtemContactosParaEdicao());
    }
    limpaCamposContacto() {
        this.tipoContactoAtual(0 /* Telefone */);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbmNpcGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdmlld21vZGVscy9wcmluY2lwYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUc5Qyx3QkFBNEMsa0JBQWtCLENBQUMsQ0FBQTtBQUcvRDtJQWdCSSxZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7YUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FB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