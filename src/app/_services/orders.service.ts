import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Order} from '../_models/order'
import {HttpParams} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import { Globals } from '../_helpers/index'

import 'rxjs/add/operator/map'

@Injectable()
export class OrdersService {
baseURL= new Globals().baseURL;
  orderData = this.getOpenOrders().subscribe;

  constructor(private http: HttpClient) {this.displayHeaders()}

  displayHeaders() {
    let header = new HttpHeaders();
    console.log(header.get('Authorization'));
  }



  getOpenOrders() {
    return this.http.get<any>(this.baseURL +'/orders/open_orders') //, {headers: header}
      .map(orders => {
        if (orders && orders.map) {
          return orders;
        } else {
          if (orders) {
            localStorage.setItem('message', "");
            return orders;
          } else {//
            console.log("ha");
            return null;
          }
        }
      });
  }

  getOpenOrdersPage(filter = '', sortBy: string, sortOrder: string,
    pageNumber = 0, pageSize = 3) {
    return this.http.get<any>(this.baseURL +'/orders/open_orders',
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortBy', sortBy)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      }) 
      .map(orders => {
        if (orders && orders.map) {
          return orders;
        } else {
          if (orders) {

            localStorage.setItem('message', "");
            return orders;
          } else {//
            return null;
          }
        }
      });
  }

  getOrderHistoryPage(filter = '', sortBy: string, sortOrder: string,
    pageNumber = 0, pageSize = 3) {
    return this.http.get<any>(this.baseURL +'/orders/order_history',
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortBy', sortBy)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      })
      .map(orders => {
        if (orders && orders.map) {
          return orders;
        } else {
          if (orders) {
            localStorage.setItem('message', "");
            return orders;
          } else {//
            // console.log("ha");
            return null;
          }
        }
      });
  }
  
    searchOrder(catagory: string, param: string) {
    return this.http.get<any>(this.baseURL +'/orders/search_order',
    {
        params: new HttpParams()
          .set('catagory', catagory)
          .set('param', param)
      })
      .map(orders => {
        if (orders && orders.map) {
          console.log('searchAndFound: ', orders);
          return orders;
        } else {
          if (orders) {
            localStorage.setItem('message', "");
            return orders;
          } else {//
            console.log("ha");
            return null;
          }
        }
      });
  }


  getOrderDetails(orderId: number) {
    return this.http.get<any>(this.baseURL +'/orders/order_details',
      {
        params: new HttpParams()
          .set('orderId', orderId.toString())
      })
      .map(orders => {
        if (orders && orders.map) {
          return orders;
        } else {
          if (orders) {
            localStorage.setItem('message', "");
            return orders;
          } else {//
            return null;
          }
        }
      });
  }

  getShippingInfo(orderId: number) {
    console.log('initiated');
    return this.http.get<any>(this.baseURL +'/orders/order_details/shipping_info',
      {
        params: new HttpParams()
          .set('orderId', orderId.toString())
      })
      .map(data => {
        console.log('and the winner is: ', data);
        if (data && data.map) {
          return data;
        } else {
          if (data) {
            localStorage.setItem('message', "");
            return data;
          } else {//
            return null;
          }
        }
      });
  }

  getCustomerPO(orderNo: string) {
    console.log('initiated');
    return this.http.get<any>(this.baseURL +'/orders/order_details/customer_po',
      {
        params: new HttpParams()
          .set('orderId', orderNo.toString())
      }) 
      .map(data => {
        if (data && data.map) {
          return data;
        } else {
          if (data) {
            localStorage.setItem('message', "");
            return data;
          } else {//
            return null;
          }
        }
      });
  }

  getOrderImage(orderNo: string) {
    console.log('initiated');
    return this.http.get<any>(this.baseURL +'/orders/order_details/order_image',
      {
        params: new HttpParams()
          .set('orderId', orderNo.toString())
      })
      .map(data => {
        console.log('and the winner is: ', orderNo.toString());
        if (data && data.map) {
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

  getInvoicePdf() {//orderNo: string){
    console.log('initiated bla');
    // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
    return this.http.get<any>(this.baseURL +'/orders/invoice',
      {
   //     params: new HttpParams()
        //  .set('orderId', orderNo.toString())
      }) //, {headers: header}, 
      .map(data => {
        console.log('and the pdf id: ', data);
        // login successful if there's a jwt token in the response
        if (data && data.map) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //   localStorage.setItem('currentUser', JSON.stringify(user));
          return data;
        } else {
          if (data) {
            console.log('and the pdf id WHYYY: ', data);
            localStorage.setItem('message', "");
            return data;
            //console.log(localStorage.getItem("message"));
          } else {//
            console.log('NOOOOOOoOoOoO');
            return null;
          }
        } 
      });
  }

}
