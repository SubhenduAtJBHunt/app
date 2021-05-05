import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DB } from '../../database';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  questions: any;
  answers : any;
  courseId: string = localStorage.getItem("courseID");

  constructor( private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.answers = this.route.snapshot.queryParams;

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

  onFinish(){
    this.router.navigateByUrl('/result',{state:{answers:this.answers,questions:this.questions}});
  }

}
