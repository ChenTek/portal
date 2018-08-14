import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../_helpers/index'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {
  baseURL= new Globals().baseURL;
    constructor(private http: HttpClient) {this.displayHeaders()}
    
    displayHeaders(){
        let header = new HttpHeaders();
        // header.append('token','22');
        console.log(header.get('Authorization'));
        }
  

   
    getResults(orderId: string){
       // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get<any>(this.baseURL +'/Image' //, {headers: header},
           , {
        params: new HttpParams()
          .set('orderId', orderId)
      })
            .map(result => { 
                // login successful if there's a jwt token in the response
                if (result && result.map) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                 //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                  console.log('bagina ', result);
                    return result;
                }else{
                    if(result){
                   
                        localStorage.setItem('message', "");
                        return result;
                        //console.log(localStorage.getItem("message"));
                        }else{//
                        return null;
                    }}
            });
        }

  
 getPage(filter = '', sortBy: string, sortOrder: string,
    pageNumber = 0, pageSize = 3) {
    // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
    return this.http.get<any>(this.baseURL +'/estimates',
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortBy', sortBy)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
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