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
            required: { message: "O nome do aluno é de preenchimento obrigatório." }
        });
        this.contactoAtual = ko.observable("").extend({
            required: { message: "O campo contacto é de preenchimento obrigatório." },
            email: {
                message: "O email não está no formato correto.",
                onlyIf: () => this.tipoContactoAtual() === 1 /* Email */
            },
            pattern: {
                message: "O formato do número de telefone não está correto.",
                params: "^\\d{9}$",
                onlyIf: () => this.tipoContactoAtual() === 0 /* Telefone */
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbmNpcGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdmlld21vZGVscy9wcmluY2lwYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUc5Qyx3QkFBNEMsa0JBQWtCLENBQUMsQ0FBQTtBQUcvRDtJQWdCSSxZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7YUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBRSxpREFBaUQsRUFBQztTQUN6RSxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxV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