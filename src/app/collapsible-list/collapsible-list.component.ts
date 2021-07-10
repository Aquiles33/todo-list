import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.css']
})
export class CollapsibleListComponent implements OnInit {
  public isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
