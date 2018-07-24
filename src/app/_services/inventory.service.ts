import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../_helpers/index'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class InventoryService{
  baseURL= new Globals().baseURL;
  constructor(private http: HttpClient) {};
  
  getResults(input) {
    // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
    return this.http.get<any>(this.baseURL +'/inventory',
      {
        params: new HttpParams()
          .set('input', input)
      }) //, {headers: header}
      .map(data => {
        // login successful if there's a jwt token in the response
        if (data && data.map) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // to check response object: console.log(JSON.stringify(orders));
          return data;
        } else {
          if (data) {

            localStorage.setItem('message', "");
            return data;
          } else {
            return null;
          }
        }
      });
  }
  
}