import { StaticData } from '../../../_helpers/index';
import { ShippingInfo } from '../../../_models/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-info-edit',
  templateUrl: './shipping-info-edit.component.html',
  styleUrls: ['./shipping-info-edit.component.css']
})
export class ShippingInfoEditComponent implements OnInit {
  @Input() info: ShippingInfo;
  loading: boolean = false
  verification: boolean = false;
  states: any[];
  countries: any[];
  
  constructor() { }

  ngOnInit() {
    this.states = new StaticData().states;
    this.countries = new StaticData().countries;
  }

  saveToDB(){
    //save to db after verification
  }
}
