import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { CollapsibleListComponent } from './collapsible-list/collapsible-list.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CompletedTasksPageComponent } from './completed-tasks-page/completed-tasks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListPageComponent,
    CollapsibleListComponent,
    ListItemsComponent,
    CompletedTasksPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
