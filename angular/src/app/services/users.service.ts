import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  registerUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/', data);
  }

  updateUser(id:any,data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users/'+id, data);
  }

  getUser(id:any):Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/single/'+id);
  }
  getUsers():Observable<any> {
    return this.http.get<any>('http://localhost:3000/users');
  }

  delUser(id:any):Observable<any> {
    return this.http.delete<any>('http://localhost:3000/users/'+id);
  }

  constructor( private http: HttpClient) { }
}
