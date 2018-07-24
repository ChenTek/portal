import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, OrdersService } from '../../_services/index';
import { Order } from '../../_models/index';
import { OrderHistorySource } from '../../_sources/index';
import { MatPaginator, MatSort } from '@angular/material';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
  providers: [
      OrdersService,
      AlertService
  ],
})
export class OrderHistoryComponent implements OnInit, AfterViewInit {
order:Order;
    selected = [];
  
    readonly screenSizeToAdjustTo = 600;

    dataSource: OrderHistorySource;
  
    selectedRowIndex = -1;
      
    previousValue = -1;
  
    panelOpenState = true;

  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["ext_ref_no", "trans_no", "ext_ref_date", "tracking_no"]
    :
    ["type_code", "ext_ref_no", "trans_no", "ext_ref_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "tracking_no"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
  
     @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  
      
  constructor(private route: ActivatedRoute, private ordersService: OrdersService, private alertService: AlertService) {
  }

  ngOnInit() {
    
        this.order = this.route.snapshot.data["order"];

        this.dataSource = new OrderHistorySource(this.ordersService, this.alertService);

        this.dataSource.loadOrders('','trans_no', 'asc', 0, 30);
    
  }

   ngAfterViewInit() {
     
        // server-side search
        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadOrdersPage();
                })
            )
            .subscribe();

        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        
        // on sort or paginate events, load a new page        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadOrdersPage())
            )
            .subscribe();
    }

  loadMore(event){
    if(event === "start reached" && this.paginator.pageIndex !== 0){
      this.paginator.pageIndex = this.paginator.pageIndex !== 0  ? this.paginator.pageIndex - 1 : 0;  
      this.loadOrdersPage();
    }
        if(event === "end reached" && this.paginator.pageSize !== this.dataSource.count){
          this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
          this.loadOrdersPage();
    }
  }
      
  highlight(row){
  console.log('highlighted: ', row);
  this.selected[0] = row;
  console.log('selected: ', this.selected);
  //this.order = row;
    this.previousValue = this.selectedRowIndex
    this.selectedRowIndex = row.id;
  
  //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
  console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
  if(this.previousValue === -1){
 // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
  }
  }
  
  
  deselect(){
    this. selectedRowIndex  = -1;
    //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
    this.selected = [];
    console.log("deselect called");
  }
  
  
  getScreenSize(){    
    return window.innerWidth;
  }
  
     loadOrdersPage() {
            this.dataSource.loadOrders(
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
}