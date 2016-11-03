/// <reference path="typings/index.d.ts" />
"use strict";
const principal_1 = require("./viewmodels/principal");
const servico_alunos_1 = require("./servicos/servico-alunos");
let servico = new servico_alunos_1.ServicoAlunos();
let principal = new principal_1.Principal(servico);
ko.applyBindings(principal);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMkNBQTJDO0FBRzNDLFlBQVksQ0FBQztBQUViLDRCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELGlDQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXhELElBQUksT0FBTyxHQUFHLElBQUksOEJBQWEsRUFBRSxDQUFDO0FBQ2xDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV2QyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=