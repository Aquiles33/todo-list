import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { CompletedTasksPageComponent } from './pages/completed-tasks-page/completed-tasks-page.component';
import { CollapsibleListComponent } from './shared/collapsible-list/collapsible-list.component';
import { ListItemsComponent } from './shared/list-items/list-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListPageComponent,
    CollapsibleListComponent,
    ListItemsComponent,
    CompletedTasksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
