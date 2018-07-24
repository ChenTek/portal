import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Order } from '../_models/index'
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertService, OrdersService } from '../_services/index';
import {of} from "rxjs/observable/of";
import {catchError, finalize} from "rxjs/operators";

export class SearchOrderSource implements DataSource<Order> {

    private lessonsSubject = new BehaviorSubject<Order[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
  
    count:number;


    constructor(private ordersService: OrdersService, private alertService: AlertService) {

    }

    getScreenSize(){    
    return window.innerWidth;
  }
  
    loadOrders(catagory: string, param: string) {
        this.loadingSubject.next(true);

          this.ordersService.searchOrder(catagory, param)
          .pipe(
          //      catchError(() => of([])),
                  catchError(() => of(this.alertService.error('Session Timed Out', true))),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(orders => {this.lessonsSubject.next(orders)});

    }
  
  timedOut(){
    this.alertService.error('Session Timed Out', true);
  }

    connect(collectionViewer: CollectionViewer): Observable<Order[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }
}