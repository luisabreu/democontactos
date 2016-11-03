"use strict";
export class Contacto {
    constructor(registo, tipoContacto) {
        this.registo = registo;
        this.tipoContacto = tipoContacto;
    }
    igual(ct) {
        if (!ct) {
            return false;
        }
        return this.registo === ct.registo &&
            this.tipoContacto === ct.tipoContacto;
    }
    static criaTelefone(registo) {
        return new Contacto(registo, 0 /* Telefone */);
    }
    static criaEmail(registo) {
        return new Contacto(registo, 1 /* Email */);
    }
}
//# sourceMappingURL=contacto.js.map