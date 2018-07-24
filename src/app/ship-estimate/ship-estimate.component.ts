import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-estimate',
  templateUrl: './ship-estimate.component.html',
  styleUrls: ['./ship-estimate.component.css']
})
export class ShipEstimateComponent implements OnInit {
  loading: boolean = false
  verification: boolean = false;
  panelOpenState = true;
  constructor() { }

  ngOnInit() {
    
  }
}
