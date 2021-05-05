import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  answers:any = history.state['answers'];
  questions: any = history.state['questions'];
  courseId: string = localStorage.getItem("courseID");
  fname: string = localStorage.getItem("fname");
  lname: string = localStorage.getItem("lname");
  email: string = localStorage.getItem("email");
  score: number = 0;
  percent: number;

  constructor( private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(!(this.courseId && this.fname && this.lname && this.email)){
      alert('There is something wrong!');
      this.router.navigate(['']);
      return;
    }

    this.calculateScore(this.questions, this.answers);
  }

  private calculateScore(questions :any, answers:any){
    

    questions.forEach(question=>{
      question.options.forEach(option=>{
        if(option.optionText == answers[question.questionId] && option.isCorrect){
          this.score++;
        }
      })
    });

    this.percent = this.score*100/questions.length;
  }

}
