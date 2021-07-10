import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-todo-list',
  templateUrl: './page-todo-list.component.html',
  styleUrls: ['./page-todo-list.component.css']
})
export class PageTodoListComponent implements OnInit {
  public title: string = 'Crie aqui sua lista de tarefas';

  constructor() { }

  ngOnInit() { }

}
