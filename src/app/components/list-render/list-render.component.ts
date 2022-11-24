import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  listRender = [
    {name: 'dog',age: 12,},
    {name: 'cat',age: 7,},
    {name: 'cow',age: 30,},
  ];
}
