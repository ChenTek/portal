import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../_models/index'
import { AlertService, OrdersService } from '../../_services/index';
import { SearchOrderSource } from '../../_sources/index';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, finalize} from "rxjs/operators";
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';

import {of} from "rxjs/observable/of";
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';


@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css'],
})
export class SearchOrderComponent implements OnInit, AfterViewInit {
order:Order;
    selected = [];

    readonly screenSizeToAdjustTo = 600;

    dataSource: SearchOrderSource;
  panelOpenState = true;
selectedRowIndex: number = -1;
  /*
   * 0 - Customer PO #
   * 1 - Order #
   * 2 - Invoice #
   * 3 - Item #
   * 4 - Tracking #
   * 5 - Logo
   * 6 - Estimate
   */
  catagories = [{name: 'Customer PO #', origName: 'ext_ref_no', value: 0}, {name: 'Order #', origName: 'trans_no', value: 1}, {name: 'Invoice #', value: 2}, {name: 'Item #', value: 3}, {name: 'Tracking #', origName: 'tracking_no', value: 4}, {name: 'Logo', origName: 'logo', value: 5}, {name: 'Estimate', value: 6}]
  selectedCatagory = 10;

  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["ext_ref_no", "trans_no", "trans_date", "order_status"]
    :
    ["customer_code", "ext_ref_no", "logo_name", "trans_no", "trans_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "tracking_no"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
    
  constructor(private route: ActivatedRoute, private ordersService: OrdersService, private alertService: AlertService) {

  }

  ngOnInit() {
    
        this.order = this.route.snapshot.data["order"];

        this.dataSource = new SearchOrderSource(this.ordersService, this.alertService);

     //   this.dataSource.loadOrders('','trans_no', 'asc', 0, 50);
  }

   ngAfterViewInit() {

    }
  

  getResults(catagory){
    if(this.input.nativeElement.value.length<2){
      this.alertService.error('Not enough characters',false,false);
    }else{
      if(this.selectedCatagory==10){
              this.alertService.error('Select a field to search',false,false);
      }else{
               this.dataSource.loadOrders(catagory, this.input.nativeElement.value);
    console.log('datasource count tay ', this.dataSource.count);
        // server-side search AUTO SEARCH
    /*fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadOrdersPage();
                })
            )
            .subscribe();*/
    
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        
        // on sort or paginate events, load a new page        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.dataSource.loadOrders(catagory,
            this.input.nativeElement.value))
            )
            .subscribe();
    }
    }
    console.log('datasource count tay ', this.dataSource.count);
  }
      
highlight(row){
  console.log('highlighted: ', row);
  this.selected[0] = row;
  console.log('selected: ', this.selected);
  //this.order = row;
    this.selectedRowIndex = row.id;
}
  
  getScreenSize(){    
    return window.innerWidth;
  }
  
    deselect() {
    this.selectedRowIndex = -1;
    //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
    this.selected = [];
    console.log("deselect called");
  }
  

}
