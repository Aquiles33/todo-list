import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from './../../services/stateService.service';
import { ITaskTemplate } from '../model/ITaskTemplate';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  @Input() todoList: ITaskTemplate[];
  @Input() emptyListMessage: string;
  @Output() eventResetList = new EventEmitter();
  @Output() eventUpdateState = new EventEmitter();

  constructor(private service: StateService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.todoList && !this.todoList.length) {
      this.ngOnInit();
    }
  }

  setValueChecked(checkedValue, targetTask) {
    let todoList = this.service.getTodoList();
    if (todoList && todoList.length > 0) {
      todoList
        .filter(tasks => tasks.id_ == targetTask.id_)
        .filter(task => task.status_ = checkedValue.target.id.slice(0, -2));
      this.service.postTodoList(todoList);
      this.eventUpdateState.emit();
    }

    if (this.service.getRoute('/')) {
      if (checkedValue.target.id.slice(0, -2) === 'done') {
        this.service.fadeOut(checkedValue.target.parentNode.parentNode);
        setTimeout(() => {
          checkedValue.target.parentNode.parentNode.remove()
          this.eventUpdateState.emit();
        }, 400);
      }

      if (this.service.getTodoList()) {
        if (this.service.getTodoList().every(task => task.status_ === 'done')) {
          this.eventUpdateState.emit();
        }
      }
    }

    if (this.service.getRoute('/completed-tasks')) {
      if (checkedValue.target.id.slice(0, -2) !== 'done') {
        this.service.fadeOut(checkedValue.target.parentNode.parentNode);
        setTimeout(() => {
          checkedValue.target.parentNode.parentNode.remove()
          this.eventUpdateState.emit();
        }, 400);
      }

      if (this.service.getTodoList()) {
        if (this.service.getTodoList().every(task => task.status_ !== 'done')) {
          this.eventUpdateState.emit();
        }
      }
    }
  }

  deleteTask(event) {
    let todoList = this.service.getTodoList();
    todoList = todoList.filter(tasks => (tasks.id_ != event.parentNode.id));
    this.service.postTodoList(todoList)

    this.service.fadeOut(event.parentNode);
    setTimeout(() => {
      event.parentNode.remove()
      this.eventUpdateState.emit();
    }, 300);


    if (!todoList.length) {
      this.eventResetList.emit();
      this.todoList = [];
    }
  }

  editTask(event, taskToBeEdited: ITaskTemplate) {
    let todoList = this.service.getTodoList();
    let editedText = window.prompt('', taskToBeEdited.description_);

    if (editedText) {
      event.target.parentNode.parentNode.remove();
      todoList
        .filter(tasks => tasks.id_ == taskToBeEdited.id_)
        .filter(task => task.description_ = editedText);
      this.service.postTodoList(todoList);

      this.eventUpdateState.emit();
    }
  }

}
