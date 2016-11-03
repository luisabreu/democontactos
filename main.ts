
/// <reference path="typings/index.d.ts" />


"use strict";

import {Principal} from "./viewmodels/principal";
import {ServicoAlunos} from "./servicos/servico-alunos";

let servico = new ServicoAlunos();
let principal = new Principal(servico);

ko.applyBindings(principal);