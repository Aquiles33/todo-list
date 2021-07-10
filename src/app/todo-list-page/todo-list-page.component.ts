import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  public title: string = 'Crie aqui sua lista de tarefas';

  constructor() { }

  ngOnInit() { }

}
