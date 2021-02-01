import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  URL = 'http://localhost:3000/resto';
  regURL = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  // получение списка гостей
  // tslint:disable-next-line:typedef
  getRestoList(){
    return this.httpClient.get(this.URL);
  }
  // Добавляет Ресторан в БД
  // tslint:disable-next-line:typedef
  addResto(data){
    return this.httpClient.post(this.URL, data);
  }
  // Получение Данных из элемента БД
  // tslint:disable-next-line:typedef
  getCurrentData(id){
    return this.httpClient.get(`${this.URL}/${id}`);
  }
  // удаляет ресторан из БД
  // tslint:disable-next-line:typedef
  deleteResto(id){
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
  // обновление ресторана в БД
  // tslint:disable-next-line:typedef
  updateResto(id, value){
    return this.httpClient.put(`${this.URL}/${id}`, value);
  }

  // Создание пользователя
  // tslint:disable-next-line:typedef
  createUser(data){
    return this.httpClient.post(this.regURL, data);
  }
  // tslint:disable-next-line:typedef
  loginUser(email: string, password: string){
    return this.httpClient.post(this.regURL, {
      email,
      password
    });
  }
}
