import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("courseID")){
      this.router.navigate(['']);
    }
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      alert('All fields are required here');
      return;
    }
    localStorage.setItem('fname',form.value.fname);
    localStorage.setItem('lname',form.value.lname);
    localStorage.setItem('email',form.value.email);
    this.router.navigate(['/exam']);
  }

}
