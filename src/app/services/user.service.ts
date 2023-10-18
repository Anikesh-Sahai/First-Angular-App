import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../User';
import { Observable} from 'rxjs';


const httpOptions ={
  headers:new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/user'

  constructor(private http:HttpClient) { }

  addUser(user:User){
    return this.http.post<User>(this.apiUrl,user,httpOptions)
  }

  getUser(user:User): Observable<User>{
    const url: string =`${this.apiUrl}?email=${user.email}`
    return this.http.get<User>(url)
  }
}
