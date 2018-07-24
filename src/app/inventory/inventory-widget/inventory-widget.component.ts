import { InventoryService, AlertService } from '../../_services/index';
import { InventorySource } from '../../_sources/index';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-widget',
  templateUrl: './inventory-widget.component.html',
  styleUrls: ['./inventory-widget.component.css']
})
export class InventoryWidgetComponent implements OnInit {
loading = false;
   @ViewChild('input') input: ElementRef;
    displayedColumns = 
    ["store_code", "on_hand_qty", "open_so_qty", "available_qty"];
  dataSource: InventorySource;
  constructor(private route: ActivatedRoute, private service: InventoryService, private alertService: AlertService) { }

  ngOnInit() {
    this.dataSource = new InventorySource(this.service, this.alertService);

  }

  query(){
    this.dataSource.loadData(this.input.nativeElement.value);
  }
}
