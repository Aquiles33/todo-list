import { ITaskTemplate } from '../ITaskTemplate';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  @Input() todoList: ITaskTemplate[];
  @Output() eventResetList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.todoList && !this.todoList.length) {
      this.ngOnInit();
    }
  }

  setValueChecked(checkedValue, taskTarget) {
    let todoListStorage: ITaskTemplate[] = JSON.parse(sessionStorage.getItem('todoList'));
    if (todoListStorage && todoListStorage.length > 0) {
      todoListStorage
        .filter(taskSession => taskSession.id_ == taskTarget.id_)
        .filter(i => i.status_ = checkedValue.slice(0, -2));
      sessionStorage.setItem('todoList', JSON.stringify(todoListStorage));
    }
  }

  deleteTask(event) {
    let todoListStorage: ITaskTemplate[] = JSON.parse(sessionStorage.getItem('todoList'));
    todoListStorage = todoListStorage.filter(taskSession => (taskSession.id_ != event.parentNode.id));
    sessionStorage.setItem('todoList', JSON.stringify(todoListStorage));

    this.fadeOut(event.parentNode);
    setTimeout(() => event.parentNode.remove(), 300);

    if (!todoListStorage.length){
      this.eventResetList.emit();
      this.todoList = [];
    }
  }

  fadeOut(el) {
    el.style.transition = '0.5s';
    el.style.opacity = 0;
  }

}
