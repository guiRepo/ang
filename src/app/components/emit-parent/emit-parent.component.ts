import { Component } from '@angular/core';

@Component({
  selector: 'app-emit-parent',
  templateUrl: './emit-parent.component.html',
  styleUrls: ['./emit-parent.component.css'],
})
export class EmitParentComponent {
  randomNun: number = 12;
  onChangeNumber() {
    this.randomNun = Math.floor(Math.random() * 10);
  }
}
