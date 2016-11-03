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
    static criaTelefone(registo) {
        return new Contacto(registo, 0 /* Telefone */);
    }
    static criaEmail(registo) {
        return new Contacto(registo, 1 /* Email */);
    }
}
exports.Contacto = Contacto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbG9zL2NvbnRhY3RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViO0lBQ0ksWUFBbUIsT0FBZSxFQUFTLFlBQXlCO1FBQWpELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFdkUsS0FBSyxDQUFDLEVBQVk7UUFDZCxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsT0FBTztZQUMxQixJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDbEQsQ0FBQztJQUNELE9BQU8sWUFBWSxDQUFDLE9BQWU7UUFDL0IsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxPQUFPLFNBQVMsQ0FBQyxPQUFlO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDTCxDQUFDO0FBakJZLGdCQUFRLFdBaUJwQixDQUFBO0FBS0EifQ==