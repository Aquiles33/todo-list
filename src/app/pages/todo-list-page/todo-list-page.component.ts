import { StateService } from 'src/app/services/stateService.service';
import { ITaskTemplate } from '../../shared/model/ITaskTemplate';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  public form: FormGroup;
  public taskId: number = 1;
  public emptyField: boolean = false;
  public enabledButton: boolean = true;
  public characterLimit: boolean = false;
  public todoList: ITaskTemplate[] = [];
  public title: string = 'Crie aqui sua lista de tarefas';
  public emptyListMessage: string = 'Não há tarefas no momento!';
  @ViewChild("input", { static: false }) InputFocus: ElementRef;

  constructor(
    private fb: FormBuilder,
    private service: StateService,
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.checkSessionStorage();
  }

  ngAfterViewInit() {
    this.InputFocus.nativeElement.focus();
  }

  createForm() {
    this.form = this.fb.group({
      newTask: ['']
    })
  }

  get formControls() {
    return this.form.controls;
  }

  addNewTask(inputValue) {
    if (inputValue && inputValue.trim() !== '') {
      if (!this.service.getListTodo()) {
        this.todoList = [];
        this.taskId = 1;
      }
      else {
        this.todoList = this.service.getListTodo();
      }

      let newTask = new ITaskTemplate(this.taskId, inputValue);
      this.todoList.push(newTask);
      this.taskId++

      this.service.postListTodo(this.todoList);
      this.todoList = this.service.getListTodo().filter(task => task.status_ !== 'done');
    }
    else {
      this.emptyField = true;
    }
    this.form.reset();
    this.InputFocus.nativeElement.focus();
  }

  validateInputValue(inputValue) {
    this.emptyField = false;
    inputValue ? this.enabledButton = false : this.enabledButton = true;
    inputValue.length === 30 ? this.characterLimit = true : this.characterLimit = false;
  }

  checkSessionStorage() {
    let todoListStorage = this.service.getListTodo();
    if (todoListStorage && todoListStorage.length > 0) {
      if(todoListStorage.every(task => task.status_ === 'done')) {
        this.todoList = [];
        this.taskId = todoListStorage[todoListStorage.length - 1].id_ + 1;
      } 
      else {
        this.todoList = todoListStorage.filter(task => task.status_ !== 'done');
      }
    }
    else {
      this.todoList = [];
    }
  }

  updateState() {
    this.checkSessionStorage();
  }

}
