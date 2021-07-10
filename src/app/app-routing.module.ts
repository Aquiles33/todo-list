import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { CompletedTasksPageComponent } from './completed-tasks-page/completed-tasks-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListPageComponent
  },
  {
    path: 'completed-tasks',
    component: CompletedTasksPageComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
