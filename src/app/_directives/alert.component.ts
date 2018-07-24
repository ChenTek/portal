import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit{
    message: any;

  staticAlertClosed = false;


    constructor(private alertService: AlertService) { }

    ngOnInit() {
              this.alertService.getMessage().subscribe(message => { this.message = message;  setTimeout(() => this.message = null, 8000);});

    }
}