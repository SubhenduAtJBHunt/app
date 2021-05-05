import { UserDetailsComponent } from './onlineExam/components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './onlineExam/components/courses/courses.component';
import { ExamComponent } from './onlineExam/components/exam/exam.component';
import { ReviewComponent } from './onlineExam/components/review/review.component';
import { ResultComponent } from './onlineExam/Components/result/result.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'userDetails',
    component: UserDetailsComponent
  },
  {
    path: 'exam',
    component: ExamComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
