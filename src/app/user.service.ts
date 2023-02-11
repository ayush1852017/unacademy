import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  api='https://una-nine.vercel.app/api';
  user:any;

  me(): Observable<any> {
    return this.http.get(`${this.api}/me/`)
  } 
  signUp(formValue: any): Observable<any> {
    const data = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    };
    return this.http.post(`${this.api}/register/`, data);
  }
  login(formValue:any): Observable<any> {
    const data = {
      email: formValue.email,
      password: formValue.password,
    };
    return this.http.post(`${this.api}/login/`,data)
  }
  //** logout **/
  logout(): Observable<any> {
    return this.http.get(`${this.api}/logout/`);
  }
   /*** get user details from local storage */
   getUser = (): any => {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : {};
    return this.user;
  };


}
