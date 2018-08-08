import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User, Order } from '../_models/index';
import { UserService } from '../_services/index';
import { AlertService, AuthenticationService, OrdersService } from '../_services/index';
import { OpenOrdersSource, OrderHistorySource } from '../_sources/index';
import { MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls:['./home.component.css'],
    
})

export class HomeComponent implements OnInit {
      @ViewChild(MatPaginator) paginator: MatPaginator;

 openOrdersColumns = ["ext_ref_no", "trans_no", "ext_ref_date", "order_status"];
 orderHistoryColumns = ["ext_ref_no", "trans_no", "ext_ref_date", "tracking_no"]
currentUser: User;
    users: User[] = [];
  order: Order;
  selected = [];
  
  openOrderdataSource: OpenOrdersSource;
  orderHistorySource: OrderHistorySource;
  public toggleBarIcon:boolean=true;
    selectedRowIndex = -1;

  previousValue = -1;

  panelOpenState = true;

    constructor(private userService: UserService, private route: ActivatedRoute, private ordersService: OrdersService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
    toggle():void{
    let self=this;
    setTimeout(()=>{
        console.log('something happened');
      self.toggleBarIcon=!self.toggleBarIcon;

    },500)
  }
    
    ngOnInit() {
        this.loadAllUsers();
      
   // this.order = this.route.snapshot.data["order"];
    this.openOrderdataSource = new OpenOrdersSource(this.ordersService, this.alertService);
    this.openOrderdataSource.loadOrders('', 'trans_no', 'desc', 0, 5);
    this.orderHistorySource = new OrderHistorySource(this.ordersService, this.alertService);
    this.orderHistorySource.loadOrders('','trans_no', 'desc', 0, 5);
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
  
  
  highlight(row) {
    console.log('highlighted: ', row);
    this.selected[0] = row;
    console.log('selected: ', this.selected);
    //this.order = row;
    this.previousValue = this.selectedRowIndex
    this.selectedRowIndex = row.id;

    //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
  //  console.log('scroll height ', this.panel.nativeElement.scrollHeight, 'position? : ', this.panel.nativeElement.scrollPosition)
    if (this.previousValue === -1) {
      // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
    }
  }

}