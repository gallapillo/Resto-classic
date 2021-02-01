import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  alert = false;
  email: string;
  password: string;
  constructor(private resto: CommonService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login(){
    // tslint:disable-next-line:triple-equals
    if(this.email == 'Cedar@gmail.com' && this.password == '12345'){
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(["./list"]);
    }
    else{
      alert('Please Enter Valid Details');
    }
  }

}
