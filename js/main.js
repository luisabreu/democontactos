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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMkNBQTJDO0FBRzNDLFlBQVksQ0FBQztBQUViLDRCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELGlDQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBR3hELElBQUksT0FBTyxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV2Qyw0QkFBNEI7QUFDNUIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQUc7SUFDOUIsSUFBSSxFQUFFLFVBQVMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUztRQUN6RCxJQUFJLEtBQUssR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsRUFBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsWUFBWTtJQUN0QyxDQUFDO0NBQ0osQ0FBQTtBQUVELEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUU7SUFDckMsU0FBUyxFQUFFLFVBQVMsR0FBRyxFQUFFLElBQUk7UUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLGFBQWtCLENBQUMsQ0FBQSxDQUFDO1lBQzVCLGNBQWM7WUFDZCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxlQUFlO1lBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEVBQUUseURBQXlEO0NBQ3JFLENBQUM7QUFFRixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNmLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixpQkFBaUIsRUFBRSxVQUFVO0NBQ2hDLENBQUMsQ0FBQztBQUVILGdCQUFnQjtBQUNoQixFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=