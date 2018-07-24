import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, EproofService } from '../_services/index';
import { EProof, User } from '../_models/index';
import { EproofSource } from '../_sources/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-eproof',
  templateUrl: './eproof.component.html',
  styleUrls: ['./eproof.component.css']
})
export class EproofComponent implements OnInit, AfterViewInit {
obj: EProof;
    selected = [];
  
    readonly screenSizeToAdjustTo = 600;

    dataSource: EproofSource;
  
    selectedRowIndex = -1;
      
    previousValue = -1;
  
    panelOpenState = true;

  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["customer_code", "trans_no", "order_status", "shipping_status"]
    :
    ["customer_code", "ext_ref_no", "trans_no", "trans_date", "net_amt", "order_status", "artwork_status", "shipping_status"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
  
     @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  
      
  constructor(private route: ActivatedRoute, private service: EproofService, private alertService: AlertService) {
  }

  ngOnInit() {
    
        this.obj = this.route.snapshot.data["data"];

        this.dataSource = new EproofSource(this.service, this.alertService);

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
      
  highlight(row){
  this.selected[0] = row;
    this.previousValue = this.selectedRowIndex
    this.selectedRowIndex = row.id;
  //scroll to selected position to avoid unseen selected row in resize case 
  //console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
  }
  
  
  deselect(){
    this. selectedRowIndex  = -1;
    //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
    this.selected = [];
    console.log("deselect called");
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
}
