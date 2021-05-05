import { Router } from '@angular/router';
import { DB } from './../../database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: any[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.courses = DB.courses
  }

  onCourseSelect(courseId):void{
    localStorage.setItem("courseID",courseId)
    this.router.navigate(['/userDetails']);
  }
}
