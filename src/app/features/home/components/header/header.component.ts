import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  showMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setShowSidenav(){
    this.showMenu.emit();
  }

}
