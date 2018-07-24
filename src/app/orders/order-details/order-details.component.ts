import {Order} from '../../_models';
import {OrderDetails} from '../../_models/index';
import {Component, OnInit, Input, Output, EventEmitter, DoCheck, Inject} from '@angular/core';
import {AlertService, OrdersService} from '../../_services/index';
import {ShippingInfoComponent, PdfviewerComponent} from '../../_dialogs/index';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, DoCheck {
  @Input() selection: Order[];
  @Output() close = new EventEmitter<any>();
  orderDetails: OrderDetails;
  loading: boolean;
  previousSelection: number;
  showAlert: boolean = true;

  constructor(private ordersService: OrdersService, private alertService: AlertService, public dialog: MatDialog, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    console.log("ngOnInit", this.selection);
    this.previousSelection = this.selection[0].id;
    this.getDetails();

  }


  ngDoCheck() {
    //t    console.log("ngDoCheck! selection: ", this.selection[0].id, "And the one from before: ", this.previousSelection);
    if (this.selection[0].id !== this.previousSelection) {
      this.getDetails();
      this.previousSelection = this.selection[0].id;
    }
  }

  closeThis() {
    this.close.emit("close");
  }

  getDetails() {
    this.loading = true;
    this.ordersService.getOrderDetails(this.selection[0].id).subscribe(details => {
      this.orderDetails = details;
      this.loading = false;
    }, error => {
      this.alertService.error('Session Timed Out', true); this.loading = false;
      this.orderDetails = null;
    });
  }

  getCustomerPO() {
    this.loading = true;
    this.ordersService.getCustomerPO(this.selection[0].trans_no).subscribe(details => {
      this.loading = false;
      if (details[0] != null && details[0].artwork_file_path !== '') {
        //   var newWindow = window.open('www.google.com');
        //  newWindow.location.href = this.customerPOurl.replace('public','');
        this.openPdfDialog(details[0].artwork_file_path, '',0);
        //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
      } else {
        this.openPdfDialog('', 'Customer PO file does not exist',0);
      };
    }, error => {
      this.alertService.error('Session Timed Out', true); this.loading = false;
    });
  }

  getOrderImage() {
    this.loading = true;
    this.ordersService.getOrderImage(this.selection[0].trans_no).subscribe(details => {
      this.loading = false;
      if (details[0] != null && details[0].artwork_file_path !== '') {
        //   var newWindow = window.open('www.google.com');
        //  newWindow.location.href = this.customerPOurl.replace('public','');
        this.openPdfDialog(details[0].artwork_file_path, '',1);
        //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
      } else {
        this.openPdfDialog('', 'Product picture not available at the moment.',1);
      };
    }, error => {
      this.alertService.error('Session Timed Out', true); this.loading = false;
    });
  }
  
  getInvoice() {
 //   this.loading = true;
 //   this.ordersService.getOrderImage(this.selection[0].trans_no).subscribe(details => {
   //   this.loading = false;
     /// if (details[0] != null && details[0].artwork_file_path !== '') {
        //   var newWindow = window.open('www.google.com');
        //  newWindow.location.href = this.customerPOurl.replace('public','');
     //   this.openPdfDialog(details[0].artwork_file_path, '',2);
        this.openPdfDialog('http://localhost:8081/Tekweld/jwtservices/orders/Invoice?orderId', '',3);
        //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
  //    } else {
  //      this.openPdfDialog('', 'Product picture not available at the moment.',2);
  //    };
  //  }, error => {
  //    this.alertService.error('Session Timed Out', true); this.loading = false;
  //  });
  }

  ConvertString(value) {
    return parseFloat(value)
  }

  getShippingAdress(): void {
    let dialogRef = this.dialog.open(ShippingInfoComponent, {
      //width: '600px',
      data: {oid: this.orderDetails[0].trans_no}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //LOGIC FOR DIALOG CLOSED
    });
  }

  openPdfDialog(url: string, msg: string, caller: number): void {
    let dialogRef = this.dialog.open(PdfviewerComponent, {
      //width: '600px',
      data: {urlSrc: url, message: msg, caller: caller}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //LOGIC FOR DIALOG CLOSED
    });
  }
}
