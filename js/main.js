/// <reference path="typings/index.d.ts" />
"use strict";
const principal_1 = require("./viewmodels/principal");
const servico_alunos_1 = require("./servicos/servico-alunos");
let servico = new servico_alunos_1.ServicoAlunos();
let principal = new principal_1.Principal(servico);
//prepara novo click handler
ko.bindingHandlers.confirmClick = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var value = valueAccessor();
        var message = ko.unwrap(value.message);
        var click = value.click;
        ko.applyBindingsToNode(element, { click: function () {
                if (confirm(message))
                    return click.apply(this, Array.prototype.slice.apply(arguments));
            } }, allBindings);
    },
    update: function (element, valueAcessor) {
    }
};
ko.validation.rules["verificaContacto"] = {
    validator: function (val, tipo) {
        if (tipo === 1 /* Email */) {
            //valida email
            return /\S+@\S+\.\S+/.test(val);
        }
        else {
            //valida telele
            return /^\d{9}$/.test(val);
        }
    },
    message: "O registo não coincide com o tipo de contacto indicado."
};
ko.validation.init({
    registerExtenders: true,
    messagesOnModified: true,
    errorMessageClass: "infoErro"
});
//setup bindings
ko.applyBindings(principal);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMkNBQTJDO0FBRzNDLFlBQVksQ0FBQztBQUViLDRCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELGlDQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBR3hELElBQUksT0FBTyxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV2Qyw0QkFBNEI7QUFDdEIsRUFBRSxDQUFDLGVBQWdCLENBQUMsWUFBWSxHQUFHO0lBQ3JDLElBQUksRUFBRSxVQUFTLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVM7UUFDekQsSUFBSSxLQUFLLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QixFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDLEVBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLFlBQVk7SUFDdEMsQ0FBQztDQUNKLENBQUE7QUFFRCxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFFO0lBQ3JDLFNBQVMsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLElBQUksS0FBSyxhQUFrQixDQUFDLENBQUEsQ0FBQztZQUM1QixjQUFjO1lBQ2QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsZUFBZTtZQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFLHlEQUF5RDtDQUNyRSxDQUFDO0FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDZixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsaUJBQWlCLEVBQUUsVUFBVTtDQUNoQyxDQUFDLENBQUM7QUFFSCxnQkFBZ0I7QUFDaEIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyJ9