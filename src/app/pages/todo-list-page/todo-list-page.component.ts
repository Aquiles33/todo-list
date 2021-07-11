import { ITaskTemplate } from '../../shared/ITaskTemplate';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  @ViewChild("input", { static: false }) InputFocus: ElementRef;
  public title: string = 'Crie aqui sua lista de tarefas';
  public form: FormGroup;
  public taskId: number = 1;
  public todoList: ITaskTemplate[] = [];
  public emptyField: boolean = false;
  public enabledButton: boolean = true;
  public characterLimit: boolean = false;

  constructor(private fb: FormBuilder) { }

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
    let todoListStorage: ITaskTemplate[] = JSON.parse(sessionStorage.getItem('todoList'));

    if (inputValue && inputValue.trim() !== '') {
      if (!todoListStorage) {
        this.todoList = [];
        this.taskId = 1;
      }
      else {
        this.todoList = todoListStorage;
      }

      let obj = new ITaskTemplate(this.taskId, inputValue);
      this.todoList.push(obj);
      this.taskId++

      sessionStorage.setItem('todoList', JSON.stringify(this.todoList));
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
    let todoListStorage: ITaskTemplate[] = JSON.parse(sessionStorage.getItem('todoList'));
    if (todoListStorage && todoListStorage.length > 0) {
      this.todoList = todoListStorage;
      this.taskId = this.todoList[this.todoList.length - 1].id_ + 1;
    }
    else {
      this.todoList = [];
    }
  }

}
