import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DB } from '../../database';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  courseId = localStorage.getItem("courseID");
  questions:any[] = null;

  constructor(private router:Router) { }

  ngOnInit(): void {

    if(!this.courseId){
      alert('There is something wrong!');
      this.router.navigate(['']);
      return;
    }
    // this.courseId='1';

    this.loadQuestions(this.courseId);
    
  }


  private loadQuestions(courseID){
    DB.courses.forEach((course:any) => {
      if(course.courseId == courseID){
        this.questions = course.questions;
      }
    });
  }

  onSubmit(form: NgForm){
    this.router['navigateDate'] = form.value;
    this.router.navigate(['/review'],{queryParams : form.value}); 
  }
}
