import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emit-child',
  templateUrl: './emit-child.component.html',
  styleUrls: ['./emit-child.component.css'],
})
export class EmitChildComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  handleClick() {
    console.log('mudou o numero');
    this.changeNumber.emit();
  }
}
