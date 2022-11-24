import { Component } from '@angular/core';

@Component({
  selector: 'app-fisrt-component',
  templateUrl: './fisrt-component.component.html',
  styleUrls: ['./fisrt-component.component.css'],
})
export class FisrtComponentComponent {
  name = 'Guilherme';
  arr = [
    { name: 'gui', age: 1 },
    { name: 'gui', age: 1 },
    { name: 'gui', age: 1 },
  ];
}
