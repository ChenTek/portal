import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, MissingArtworkService } from '../_services/index';
import { MissingArtwork, User } from '../_models/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MissingArtworkSource } from '../_sources/index';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-missing-artwork',
  templateUrl: './missing-artwork.component.html',
  styleUrls: ['./missing-artwork.component.css']
})
export class MissingArtworkComponent implements OnInit, AfterViewInit {
artwork: MissingArtwork;
    selected = [];
  
    readonly screenSizeToAdjustTo = 600;

    dataSource: MissingArtworkSource;
  
    selectedRowIndex = -1;
      
    previousValue = -1;
  
    panelOpenState = true;

  displayedColumns = this.getScreenSize()<this.screenSizeToAdjustTo?
    ["customer_code", "trans_no", "artwork_status", "UploadArt"]
    :
    ["customer_code", "trans_date", "trans_no", "ext_ref_no", "catalog_item_code", "artwork_status", "UploadArt"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
  
     @ViewChild('panel', { read: ElementRef }) public panel: ElementRef;
  
      
  constructor(private route: ActivatedRoute, private artworkService: MissingArtworkService, private alertService: AlertService) {
  }

  ngOnInit() {
    
        this.artwork = this.route.snapshot.data["data"];

        this.dataSource = new MissingArtworkSource(this.artworkService, this.alertService);

        this.dataSource.loadOrders('','trans_no', 'asc', 0, 30);
    
  }

   ngAfterViewInit() {
     
        // server-side search
        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.loadOrdersPage();
                })
            )
            .subscribe();

        // reset the paginator after sorting
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        
        
        // on sort or paginate events, load a new page        
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadOrdersPage())
            )
            .subscribe();
    }

  loadMore(event){
    if(event === "start reached" && this.paginator.pageIndex !== 0){
      this.paginator.pageIndex = this.paginator.pageIndex !== 0  ? this.paginator.pageIndex - 1 : 0;  
      this.loadOrdersPage();
    }
        if(event === "end reached" && this.paginator.pageSize !== this.dataSource.count){
          this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
          this.loadOrdersPage();
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
  
     loadOrdersPage() {
            this.dataSource.loadOrders(
            this.input.nativeElement.value,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }
}
