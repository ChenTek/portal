import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OrdersService} from '../../_services/index'

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css'],
  providers: [OrdersService,
{ provide: 'Window', useValue: window }
]
})
export class PdfviewerComponent implements OnInit {
  caller: number; 
  orderService: OrdersService;
  pdfSrc = 'http://localhost:8081/Tekweld/jwtservices/orders/Invoice';

  
  
  constructor(
    public dialogRef: MatDialogRef<PdfviewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, @Inject('Window') private window: Window) {
  }
  

 
  

  ngOnInit() {
    this.caller = this.data.caller;
    if (this.data != null && this.data.urlSrc !== '') {
      if(this.caller === 0 || this.caller === 1){
      if(this.data.urlSrc.includes('.doc')){
      this.data.message = 'Cannot preview Word docs. File downloaded automatically.'; // TODO: add the function without the page size
        this.load_doc();
      }
      this.load_pdf();
      }else{
      if (this.caller === 2){
        console.log('Jojoba gell will balden you');
      }else{
        if (this.caller ===3){
          this.load_temp()
        }
        }
      }
    };

    
  }
  
    load_doc() {
    document.getElementById("docdiv").innerHTML =
      '<object type="text/html" data="https://tekweld.promo.tekweld.com/' + this.data.urlSrc.replace('public', '') + '" ></object>';
  }

  load_pdf() {
    document.getElementById("content").innerHTML =
      '<object type="text/html" style="min-height: 80vh; min-width: 400px; width: 50vw" data="https://tekweld.promo.tekweld.com/' + this.data.urlSrc.replace('public', '') + '" ></object>';
  }
  
    load_temp() {
    document.getElementById("content").innerHTML =
      '<object type="text/html" style="min-height: 80vh; min-width: 400px; width: 50vw" data="' + this.data.urlSrc.replace('public', '') + '" ></object>';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
