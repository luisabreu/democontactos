"use strict";
class Aluno {
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
        this.contactos.splice(pos, 1);
    }
    obtemContactosParaEdicao() {
        return this.contactos.map(c => c.duplica());
    }
    existeContacto(contacto) {
        let pos = this.contactos.findIndex(c => c.igual(contacto));
        return pos >= 0;
    }
}
exports.Aluno = Aluno;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx1bm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbG9zL2FsdW5vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUliO0lBR0ksWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWtCO1FBQzdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFBLENBQUMsR0FBRyxHQUFHLENBQUUsQ0FBQyxDQUFBLENBQUM7WUFDVCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRU8sY0FBYyxDQUFDLFFBQWlCO1FBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNMLENBQUM7QUEvQlksYUFBSyxRQStCakIsQ0FBQSJ9