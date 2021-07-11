import { Component, OnInit } from '@angular/core';
import { ITaskTemplate } from 'src/app/shared/model/ITaskTemplate';
import { StateService } from 'src/app/services/stateService.service';

@Component({
  selector: 'app-completed-tasks-page',
  templateUrl: './completed-tasks-page.component.html',
  styleUrls: ['./completed-tasks-page.component.css']
})
export class CompletedTasksPageComponent implements OnInit {
  public title: string = 'Lista de tarefas concluídas';
  public emptyListMessage: string = 'Não há tarefas concluídas no momento!';
  public todoList: ITaskTemplate[] = [];

  constructor(private service: StateService) { }

  ngOnInit(): void {
    this.checkSessionStorage();
  }

  checkSessionStorage() {
    let todoListStorage = this.service.getListTodo();

    if (todoListStorage && todoListStorage.length > 0)
      this.todoList = todoListStorage.filter(task => task.status_ === 'done');
    else
      this.todoList = [];
  }

  updateStatus() {
    this.checkSessionStorage();
  }

}
