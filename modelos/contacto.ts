"use strict";

export class Contacto{    
    constructor(public registo: string, public tipoContacto:TipoContacto){}

    igual(ct: Contacto){
        if(!ct){
            return false;
        }
        return this.registo === ct.registo &&
                this.tipoContacto === ct.tipoContacto;
    }
    static criaTelefone(registo: string){        
        return new Contacto(registo, TipoContacto.Telefone);
    }

    static criaEmail(registo: string){
        return new Contacto(registo, TipoContacto.Email);
    }
}

export const enum TipoContacto{
    Telefone,
    Email
}