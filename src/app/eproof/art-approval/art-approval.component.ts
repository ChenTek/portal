import { ImageDialogComponent, PdfviewerComponent } from '../../_dialogs/index';
import { EProof, ImageObject } from '../../_models/index';
import { ImageService, AlertService } from '../../_services/index';
import { ImageSource } from '../../_sources/index';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-art-approval',
  templateUrl: './art-approval.component.html',
  styleUrls: ['./art-approval.component.css']
})
export class ArtApprovalComponent implements OnInit {
  @Input() selection: EProof[];
  @Output() close = new EventEmitter<any>();
  obj: ImageObject;
  dataSource: ImageSource;
  dummy: string[];
  imageUri: string[];
  bla: string;
  loading = true;
  pdfSrc: string = 'https://tekweld.promo.tekweld.com//attachments/TEKW1122/537546-C/CB300-GREEN-v1.pdf';
  pita = {
 url: 'https://tekweld.promo.tekweld.com//attachments/TEKW1122/537546-C/CB300-GREEN-v1.pdf',
 withCredentials: false
}
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private service: ImageService, private alertService: AlertService) { this.dummy = ['a','b']
}

  ngOnInit() {
            this.obj = this.route.snapshot.data["data"];  

        this.dataSource = new ImageSource(this.service, this.alertService);

        this.dataSource.loadData(this.selection[0].trans_no);
    
    this.getImage();
  }
  closeThis() {
    this.close.emit("close");//COMTINUE VUILDUIN THIS
  }

    getImage() {
    this.loading = true;
    this.service.getResults(this.selection[0].trans_no).subscribe(details => {
      this.loading = false;
      if(details != null){
        details.forEach((item, index) => {
    console.log(item); // 9, 2, 5
    console.log(index); // 0, 1, 2
});
      }
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
  
  openPdf(uri){
    this.openPdfDialog(uri, '',3);
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
  
    openImageDialog(url: string, msg: string, caller: number): void {
    let dialogRef = this.dialog.open(ImageDialogComponent, {
      //width: '600px',
      data: {urlSrc: url, message: msg, caller: caller}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //LOGIC FOR DIALOG CLOSED
    });
  }
}
