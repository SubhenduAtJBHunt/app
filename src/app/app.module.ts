import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './onlineExam/components/home/home.component';
import { UserDetailsComponent } from './onlineExam/components/user-details/user-details.component';
import { CoursesComponent } from './onlineExam/components/courses/courses.component';
import { ExamComponent } from './onlineExam/components/exam/exam.component';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './onlineExam/components/review/review.component';
import { ResultComponent } from './onlineExam/Components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    CoursesComponent,
    ExamComponent,
    ReviewComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
