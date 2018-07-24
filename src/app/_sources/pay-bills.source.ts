import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { PayBills } from '../_models/index'
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertService, PayBillsService } from '../_services/index';
import {of} from "rxjs/observable/of";
import {catchError, finalize} from "rxjs/operators";

export class PayBillsSource implements DataSource<PayBills> {

    private lessonsSubject = new BehaviorSubject<PayBills[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
  
    count:number;
  
  data:any[];

    constructor(private service: PayBillsService, private alertService: AlertService) {

    }

    getScreenSize(){    
    return window.innerWidth;
  }
  
    loadData(filter = '', sortBy: string, 
        sortDirection: string, pageIndex = 0, pageSize = 1000) { //1000 set to avoid pagination. can be factored afterwards
        this.loadingSubject.next(true);

  //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
  //          pageIndex, pageSize)
          this.service.getPage(filter, sortBy, sortDirection,
        pageIndex, pageSize)
          .pipe(
          //      catchError(() => of([])),
                  catchError(() => of(this.alertService.error('Session Timed Out', true))),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(data => {this.lessonsSubject.next(data), (data[0] == null?this.count=0:this.count = data[0].total_rs), this.data = data},
                        error =>{console.log("PayBills Error")});

    }
  
      loadAllData() { //1000 set to avoid pagination. can be factored afterwards
        this.loadingSubject.next(true);

  //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
  //          pageIndex, pageSize)
          this.service.getResults()
          .pipe(
          //      catchError(() => of([])),
                  catchError(() => of(this.alertService.error('Session Timed Out', true))),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(data => {this.lessonsSubject.next(data), (data[0] == null?this.count=0:this.count = data.length), this.data = data, console.log('BillsData: ', data)},
                        error =>{console.log("PayBills Error")});

    }
  
  timedOut(){
    this.alertService.error('Session Timed Out', true);
  }

    connect(collectionViewer: CollectionViewer): Observable<PayBills[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }
}