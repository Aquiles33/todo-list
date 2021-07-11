import { StateService } from 'src/app/services/stateService.service';
import { ITaskTemplate } from '../model/ITaskTemplate';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.css']
})
export class CollapsibleListComponent implements OnInit {
  @Output() eventUpdateState = new EventEmitter();
  @Input() todoList: ITaskTemplate[];
  @Input() emptyListMessage: string;

  public isOpen: boolean = true;

  constructor(private service: StateService) { }

  ngOnInit(): void { }

  resetList() {
    this.todoList = [];
  }

  updateState() {
    this.todoList = this.service.getListTodo();
    this.eventUpdateState.emit();
  }

}
