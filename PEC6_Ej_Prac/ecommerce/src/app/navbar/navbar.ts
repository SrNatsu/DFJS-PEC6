import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() currentView: string = 'list';
  @Output() viewChange = new EventEmitter<string>();

  changeView(view: string, event: Event): void {
    event.preventDefault();
    this.viewChange.emit(view);
  }
}
