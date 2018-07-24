import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../_helpers/index'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(true); // {1}
  baseURL= new Globals().baseURL;

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
        
    constructor(private http: HttpClient) { this.displayHeaders(); }
    
    displayHeaders(){
        let header = new HttpHeaders();
        // header.append('token','22');
        console.log(header.get('Authorization'));
        }
    login(username: string, password: string) {
        let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("currentUser.token")});
        return this.http.post<any>(this.baseURL + '/login', { username: username, password: password },  {headers: header})
            .map(user => { 
                // login successful if there's a jwt token in the response
                if (user && user[0].token) {
                  this.loggedIn.next(true);
                  console.log('user && user.token');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user[0]));
                console.log(JSON.stringify(user[0]));
                }else{
                    if(user){
                        localStorage.setItem('message', JSON.stringify(user));
                        }else{//
                    }}
                return user;
            });
    }

    logout() {
      this.loggedIn.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    

}

