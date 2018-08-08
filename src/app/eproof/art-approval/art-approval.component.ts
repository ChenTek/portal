import { ImageDialogComponent } from '../../_dialogs/index';
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
