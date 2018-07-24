import { PayBills } from '../_models/index';
import { AlertService, PayBillsService } from '../_services/index';
import { PayBillsSource } from '../_sources/index';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pay-bills',
  templateUrl: './pay-bills.component.html',
  styleUrls: ['./pay-bills.component.css']
})
  

export class PayBillsComponent implements OnInit, AfterViewInit {
  
  obj: PayBills;
    readonly screenSizeToAdjustTo = 600;
    dataSource: PayBillsSource;
    panelOpenState = true;
   checked = false;
  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["Select", "customer_code", "trans_no"]
    :
    ["Select", "customer_code", "trans_no", "ref_trans_no", "trans_date", "net_amt", "paid_amt", "balance_amt", "ship_date", "ext_ref_date", "ext_ref_no", "tracking_no"];

    selection = new SelectionModel<any>(true, []);


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  
   constructor(private route: ActivatedRoute, private service: PayBillsService, private alertService: AlertService) {
  }
  
  ngOnInit(): void {
        this.obj = this.route.snapshot.data["data"];

        this.dataSource = new PayBillsSource(this.service, this.alertService);
        
        this.dataSource.loadAllData();

        //this.dataSource.loadData('','trans_no', 'asc', 0, 1000);
  }
  ngAfterViewInit(): void {

        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        
        // on sort or paginate events, load a new page        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadAllData())
            )
            .subscribe();
  }
  
  selectionSum():number{
    const sum:number[] = [];
    sum[0]=0;
    let i =0;
    const add = (a, b) => (a*1) + (b*1);
    this.selection.selected.forEach(row => (sum[i] = row.balance_amt, i++));
    return sum.reduce(add)!=null?sum.reduce(add):0;
  }
 
    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.count;
    return numSelected === numRows;
  }
  
  toyota(data: PayBills){
    this.selection.selected.forEach(row => row === data ? true : false);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    
  }
  
    getScreenSize(){    
    return window.innerWidth;
  }
  
  printMyShit(shit: any){
    console.log('printMyShit: ',shit);
  }
  
   /* loadMore(event){
    if(event === "start reached" && this.paginator.pageIndex !== 0){
      this.paginator.pageIndex = this.paginator.pageIndex !== 0  ? this.paginator.pageIndex - 1 : 0;  
      this.loadDataPage();
    }
        if(event === "end reached" && this.paginator.pageSize !== this.dataSource.count){
          this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
          this.loadDataPage();
    }
  }
      
       loadDataPage() { //MAY BE OBSULETE 
            this.dataSource.loadData(
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
         
         console.log('selection trooper ', this.selection);
    }
  */
  loadAllData() {
            this.dataSource.loadAllData();
         
         console.log('selection trooper ', this.selection);
    console.log('counting troopers ', this.dataSource.count);
    }

}
