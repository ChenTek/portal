import { PdfviewerComponent } from '../_dialogs';
import { Estimate } from '../_models/index';
import { AlertService, EstimatesService } from '../_services/index';
import { EstimatesSource } from '../_sources/index';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css']
})
export class EstimatesComponent implements OnInit, AfterViewInit {
obj: Estimate;
    selected = [];
  
    readonly screenSizeToAdjustTo = 600;

    dataSource: EstimatesSource;
  
    selectedRowIndex = -1;
      
    previousValue = -1;
  
    panelOpenState = true;

  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["trans_no", "trans_date", "salesperson_code", "externalsalesperson_code", "expiry_date"]
    :
    ["customer_code", "trans_no", "trans_date", "salesperson_code", "externalsalesperson_code", "expiry_date"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
  
     @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  
      
  constructor(private route: ActivatedRoute, private service: EstimatesService, private alertService: AlertService, public dialog: MatDialog) {
  }

  ngOnInit() {
    
        this.obj = this.route.snapshot.data["data"];

        this.dataSource = new EstimatesSource(this.service, this.alertService);

        this.dataSource.loadData('','trans_no', 'asc', 0, 30);
    
  }

   ngAfterViewInit() {
     
        // server-side search
        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadDataPage();
                })
            )
            .subscribe();

        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        
        // on sort or paginate events, load a new page        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadDataPage())
            )
            .subscribe();
    }

  loadMore(event){
    if(event === "start reached" && this.paginator.pageIndex !== 0){
      this.paginator.pageIndex = this.paginator.pageIndex !== 0  ? this.paginator.pageIndex - 1 : 0;  
      this.loadDataPage();
    }
        if(event === "end reached" && this.paginator.pageSize !== this.dataSource.count){
          this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
          this.loadDataPage();
    }
  }

  getScreenSize(){    
    return window.innerWidth;
  }
  
     loadDataPage() {
            this.dataSource.loadData(
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
  
    getDetails() { //TODO : change to acctual estimate pdf creator once created
        this.openPdfDialog('http://localhost:8081/Tekweld/jwtservices/orders/Invoice?orderId', '',3);
  }
  
    openPdfDialog(url: string, msg: string, caller: number): void {
    let dialogRef = this.dialog.open(PdfviewerComponent, {
      //width: '600px',
      data: {urlSrc: url, message: msg, caller: caller}
    });

    dialogRef.afterClosed().subscribe(result => {
     // console.log('The dialog was closed');
      //LOGIC FOR DIALOG CLOSED
    });
  }
}