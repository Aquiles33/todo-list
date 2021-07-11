import { ITaskTemplate } from '../ITaskTemplate';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.css']
})
export class CollapsibleListComponent implements OnInit {
  public isOpen: boolean = true;

  @Input() todoList: ITaskTemplate[];

  constructor() { }

  ngOnInit(): void {}

  resetList() {
    this.todoList = [];
  }

}
