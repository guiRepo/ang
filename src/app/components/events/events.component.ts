import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
show: boolean = false;


showH1(): void {
  this.show = !this.show
  // criando recurso toggle
}
}
