import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['Spiderman','Iron man','Hulk','Thor','Capitan America'];

  heroeBorrado:string | undefined;

  constructor() {
    console.log('constructor')

  }

  ngOnInit(): void {

    console.log('ininit')
  }

  borrarHeroe = () => {
     this.heroeBorrado =  this.heroes.shift()
  }

}
