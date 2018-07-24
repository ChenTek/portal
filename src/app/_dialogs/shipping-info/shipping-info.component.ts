import { ShippingInfo } from '../../_models/index';
import { OrdersService, AlertService } from '../../_services/index';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {
  loading: boolean;
  shippingInfo: ShippingInfo[];
  selectedAddress: ShippingInfo;
  openEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ShippingInfoComponent>,
    private ordersService: OrdersService,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  this.getShippingInfo();
   }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

  edit(){
    this.openEdit=true;
  }
  
    getShippingInfo(){
      this.loading=true;
        this.ordersService.getShippingInfo(this.data.oid).subscribe(data => { 
        this.shippingInfo = data;
          this.loading=false;
    }, error => {
    this.alertService.error('Session Timed Out', true);   
    this.loading=false; 
    this.dialogRef.close();
    this.shippingInfo=null;
      });
  }
}
