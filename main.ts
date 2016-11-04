
/// <reference path="typings/index.d.ts" />


"use strict";

import {Principal} from "./viewmodels/principal";
import {ServicoAlunos} from "./servicos/servico-alunos";

let servico = new ServicoAlunos();
let principal = new Principal(servico);

//prepara novo click handler
ko.bindingHandlers.confirmClick = {
    init: function(element, valueAccessor, allBindings, viewModel) {
        var value = valueAccessor();
        var message = ko.unwrap(value.message);
        var click = value.click;
        ko.applyBindingsToNode(element, { click: function () {
            if (confirm(message))
                return click.apply(this, Array.prototype.slice.apply(arguments));
        }}, allBindings);       
    },
    update: function(element, valueAcessor){
    }
}

//setup bindings
ko.applyBindings(principal);