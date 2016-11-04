"use strict";
class Contacto {
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
    eTelefone() {
        return this.tipoContacto === 0 /* Telefone */;
    }
    duplica() {
        return new Contacto(this.registo, this.tipoContacto);
    }
    static criaTelefone(registo) {
        return new Contacto(registo, 0 /* Telefone */);
    }
    static criaEmail(registo) {
        return new Contacto(registo, 1 /* Email */);
    }
}
exports.Contacto = Contacto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbG9zL2NvbnRhY3RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViO0lBQ0ksWUFBbUIsT0FBZSxFQUFTLFlBQXlCO1FBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFdkUsS0FBSyxDQUFDLEVBQVk7UUFDZCxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsT0FBTztZQUMxQixJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxnQkFBcUIsQ0FBQztJQUN2RCxDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsT0FBTyxZQUFZLENBQUMsT0FBZTtRQUMvQixNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELE9BQU8sU0FBUyxDQUFDLE9BQWU7UUFDNUIsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxhQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztBQUNMLENBQUM7QUExQlksZ0JBQVEsV0EwQnBCLENBQUE7QUFLQSJ9