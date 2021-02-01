import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss']
})
export class ListRestaurantComponent implements OnInit {

  public collection: any;
  alert = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;
    });
  }
  // Удаляет ресторан из БД
  // tslint:disable-next-line:typedef
  deleteResto(resto){
    this.collection.splice(resto.id, -1 );
    this.commonService.deleteResto(resto).subscribe((result) => {
      console.log('Data is Deleted Successfull !', result);
      this.alert = true;
    })
  }

}
