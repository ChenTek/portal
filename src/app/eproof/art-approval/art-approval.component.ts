import { ImageDialogComponent, PdfviewerComponent } from '../../_dialogs/index';
import { EProof } from '../../_models/index';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-art-approval',
  templateUrl: './art-approval.component.html',
  styleUrls: ['./art-approval.component.css']
})
export class ArtApprovalComponent implements OnInit {
  @Input() selection: EProof[];
  @Output() close = new EventEmitter<any>();
  dummy: string[];
  constructor(public dialog: MatDialog) { this.dummy = ['a']
}

  ngOnInit() {
  }
  closeThis() {
    this.close.emit("close");
  }
  
  openPdf(){
    this.openPdfDialog('../assets/images/proof_sample.pdf', '',3);
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
