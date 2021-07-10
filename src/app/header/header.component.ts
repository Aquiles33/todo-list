import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-todo',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.typeWrite();
  }

  typeWrite() {
    const h1 = document.querySelector<HTMLElement>('.header-title-content');
    const arrayText = this.title.split('');
    h1.innerHTML = '';
    arrayText.forEach((letter, i) => setTimeout(() => h1.innerHTML += letter, 75 * i));
  }
}
