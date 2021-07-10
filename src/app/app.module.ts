import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageTodoListComponent } from './page-todo-list/page-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
