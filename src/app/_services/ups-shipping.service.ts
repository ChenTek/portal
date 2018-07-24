import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../_helpers/index'

@Injectable()
export class UpsShippingService {
    baseURL= new Globals().baseURL;
    constructor(private http: HttpClient) {this.displayHeaders()}
    
    displayHeaders(){
        let header = new HttpHeaders();
        // header.append('token','22');
        console.log(header.get('Authorization'));
        }
  

   
    getResults(){
      console.log('hoho jaja kaka ', 'INITIATED DAMN IT!');
       // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get<any>('https://onlinetools.ups.com/rest/Ship') //, {headers: header} //TODO: when production, use https://onlinetools.ups.com/rest/Ship  
            .map(result => { console.log('KUBAH');   
                if (result && result.map) {
                      console.log('hoho jaja kaka ', result);
                    return result;
                }else{
                    if(result){
                   console.log('hoho jaja kaka DELETEALE? ', result);
                        localStorage.setItem('message', "");
                        return result;

                        }else{//
                      console.log('hoho jaja kaka ', 'PUTA!');
                        return null;
                    }}
            }, error =>{
              console.log('CABRON!');
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
