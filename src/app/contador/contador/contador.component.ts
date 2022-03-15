import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl:'./contador.component.html'
})
export class ContadorComponent {

    title = 'Contador APP';
    numero:number = 10;
  
    base:number = 5;
  
  
    sumar = () => {
      console.log('entro')
      this.numero += 1; 
    }
  
    restar = () => {
      this.numero -= 1; 
    }
  
    acumular = (valor:number) => {
      this.numero += valor; 
    }

}