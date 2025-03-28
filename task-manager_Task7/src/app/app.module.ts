import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    TaskComponent
  ],
  providers: [],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
// Compare this snippet from task-manager/src/app/app.component.html: