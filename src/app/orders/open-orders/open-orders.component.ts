import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Order} from '../../_models/index'
import {AlertService, OrdersService} from '../../_services/index';
import {DataSource, CollectionViewer} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatTable, MatDialog} from '@angular/material';
import {BehaviorSubject, Observable} from 'rxjs';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {ScrollTrackerDirective} from '../../_directives/scroll-tracker'
import {ShippingInfoComponent} from '../../_dialogs/shipping-info/shipping-info.component';
import {OpenOrdersSource} from '../../_sources/index';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';

@Component({
  selector: 'app-open-orders',
  moduleId: module.id.toString(),
  templateUrl: './open-orders.component.html',
  providers: [
    OrdersService,
    AlertService
  ],
  styleUrls: ['./open-orders.component.css']
})

export class OpenOrdersComponent implements OnInit, AfterViewInit {
  order: Order;
  selected = [];

  readonly screenSizeToAdjustTo = 600;

  dataSource: OpenOrdersSource;

  selectedRowIndex = -1;

  previousValue = -1;

  panelOpenState = true;

  displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
    ["ext_ref_no", "trans_no", "ext_ref_date", "order_status"]
    :
    ["type_code", "ext_ref_no", "trans_no", "ext_ref_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "ship_qty", "estimated_ship_date"];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  @ViewChild('panel', {read: ElementRef}) public panel: ElementRef;


  constructor(private route: ActivatedRoute, private ordersService: OrdersService, private alertService: AlertService) {
  }

  ngOnInit() {

    this.order = this.route.snapshot.data["order"];

    this.dataSource = new OpenOrdersSource(this.ordersService, this.alertService);

    this.dataSource.loadOrders('', 'trans_no', 'asc', 0, 30);

  }

  ngAfterViewInit() {

    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
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

  loadMore(event) {
    if (event === "start reached" && this.paginator.pageIndex !== 0) {
      this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
      this.loadOrdersPage();
    }
    if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
      this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
      this.loadOrdersPage();
    }
  }

  highlight(row) {
    console.log('highlighted: ', row);
    this.selected[0] = row;
    console.log('selected: ', this.selected);
    //this.order = row;
    this.previousValue = this.selectedRowIndex
    this.selectedRowIndex = row.id;

    //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
    console.log('scroll height ', this.panel.nativeElement.scrollHeight, 'position? : ', this.panel.nativeElement.scrollPosition)
    if (this.previousValue === -1) {
      // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
    }
  }


  deselect() {
    this.selectedRowIndex = -1;
    //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
    this.selected = [];
    console.log("deselect called");
  }


  getScreenSize() {
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

