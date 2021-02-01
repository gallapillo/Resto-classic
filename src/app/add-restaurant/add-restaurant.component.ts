import { Component, OnInit } from '@angular/core';
import  {CommonService} from '../common.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  alert = false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService) { }

  ngOnInit(): void {

  }
  // Создает ресторан в БД
  // tslint:disable-next-line:typedef
  createResto(){
    this.resto.addResto(this.addRestaurant.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurant.reset({});
      console.log('Get Data From Service', result);
    });
  }

  // Закрывает предупреждение
  // tslint:disable-next-line:typedef
  closeAlert(){
    this.alert = false;
  }
}
