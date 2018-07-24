import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
  
export class InventoryComponent implements OnInit {
  loading = false;
  verification =  false;
  panelOpenState = true;
  constructor() { }

  ngOnInit() {
  }
}