import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) { }

  updateUser(userData, userId){
    return this.http.put('http://localhost:3000/users/'+userId, userData);
  }

  getUser(userData){
    return this.http.get('http://localhost:3000/users', {
      params: userData
    });
  }

}
