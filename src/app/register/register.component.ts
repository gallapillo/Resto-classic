import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  alert = false;
  createUser = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService) { }

  ngOnInit(): void {

  }

  // регистрация пользователя
  // tslint:disable-next-line:typedef
  regUser(){
    this.resto.createUser(this.createUser.value).subscribe((result) => {
      this.alert = true;
      this.createUser.reset();
      console.log(result, 'data created');
    });
  }
  // tslint:disable-next-line:typedef
  closeAlert(){
    this.alert = false;
  }
}
