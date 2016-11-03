"use strict";
export class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.contactos = [];
    }
    adicionaContacto(contacto) {
        if (this.existeContacto(contacto)) {
            return;
        }
        this.contactos.push(contacto);
    }
    removeContacto(contacto) {
        let pos = this.contactos.findIndex(c => c.igual(contacto));
        if (pos < 0) {
            return;
        }
        this.contactos.splice(pos);
    }
    existeContacto(contacto) {
        let pos = this.contactos.findIndex(c => c.igual(contacto));
        return pos >= 0;
    }
}
//# sourceMappingURL=aluno.js.map