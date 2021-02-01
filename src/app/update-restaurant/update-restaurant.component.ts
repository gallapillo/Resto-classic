import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})
export class UpdateRestaurantComponent implements OnInit {

  alert = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private resto: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      });
    });
  }

  // обновление элемента
  // tslint:disable-next-line:typedef
  updateResto(){
      this.alert = true;
      this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result) =>{
        console.log("data updated");
      });
  }

  // Закрывает предупреждение
  // tslint:disable-next-line:typedef
  closeAlert(){
    this.alert = false;
  }
}
