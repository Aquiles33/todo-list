import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-tasks-page',
  templateUrl: './completed-tasks-page.component.html',
  styleUrls: ['./completed-tasks-page.component.css']
})
export class CompletedTasksPageComponent implements OnInit {
  public title: string = 'Lista de tarefas concluídas'

  constructor() { }

  ngOnInit(): void {
  }

}
