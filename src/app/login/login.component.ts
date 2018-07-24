import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { ShippingInfoComponent } from '../_dialogs/shipping-info/shipping-info.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
        animations: [
    trigger(
      'bgChange', [
        transition(':enter', [
          style({background: 'transparent', opacity: 0}),
          animate('500ms', style({background: 'black', opacity: 1}))
        ]),
        transition(':leave', [
          style({background: 'black', opacity: 1}),
          animate('500ms', style({background: 'transparent', opacity: 1}))
        ])
      ]
    )]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    
  animal: string;
  name: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        public dialog: MatDialog
        ) { }

    ngOnInit() { 
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Unable to login ', this.model.username); //TODO: add reason
                    this.loading = false;
                });
    }

}
