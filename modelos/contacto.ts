"use strict";

export class Contacto{    
    constructor(public registo: string, public tipoContacto:TipoContacto){}

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