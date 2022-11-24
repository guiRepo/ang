import { Component, INJECTOR, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() parentData = '';
  @Input() datauser!: {name: string, age: number} 
  // colocando a exclamação informa que o dado vai ser iniciado
  // o angular precisa que o dado seja iniciado de alguma forma para receber o valor do compomente pai


}
