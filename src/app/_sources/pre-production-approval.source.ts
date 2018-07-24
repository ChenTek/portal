import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { PreProductionApproval } from '../_models/index'
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertService, PreProductionApprovalService } from '../_services/index';
import {of} from "rxjs/observable/of";
import {catchError, finalize} from "rxjs/operators";

export class PreProductionApprovalSource implements DataSource<PreProductionApproval> {

    private lessonsSubject = new BehaviorSubject<PreProductionApproval[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
  
    count:number;


    constructor(private service: PreProductionApprovalService, private alertService: AlertService) {

    }

    getScreenSize(){    
    return window.innerWidth;
  }
  
    loadData(filter = '', sortBy: string, 
        sortDirection: string, pageIndex = 0, pageSize = 30) {
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
            .subscribe(data => {this.lessonsSubject.next(data), (data[0] == null?this.count=0:this.count = data[0].total_rs)},
                        error =>{console.log("Missing Artwork Error")});

    }
  
  timedOut(){
    this.alertService.error('Session Timed Out', true);
  }

    connect(collectionViewer: CollectionViewer): Observable<PreProductionApproval[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }
}