import { StaticData } from '../../_helpers/index';
import { Component, OnInit } from '@angular/core';
import {AlertService, UpsShippingService} from '../../_services/index';
import { BehaviorSubject } from 'rxjs';
import {of} from "rxjs/observable/of";
import {catchError, finalize} from "rxjs/operators";

import { SOAPService, Client } from 'ngx-soap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ship-estimate-widget',
  templateUrl: './ship-estimate-widget.component.html',
  styleUrls: ['./ship-estimate-widget.component.css']
})
export class ShipEstimateWidgetComponent implements OnInit {
 // loading: boolean = false;
  verification: boolean = false;
  states: any[];
  countries: any[];
  packageTypes =  ["Default"];

  
    intA: string;
  intB: string;
  jsonResponse: any;
  xmlResponse: string;
  message: string;
  loading: boolean;
  resultLabel: string;
  showDiagnostic: boolean;
  private client: Client;

  constructor(private http: HttpClient, private soap: SOAPService, private shippingService: UpsShippingService, private alertService: AlertService) {  }

  ngOnInit() {
    this.states = new StaticData().states;
    this.countries = new StaticData().countries;
  }
  
    getThat(){
      
    
  //  this.loadAllData();
      
          this.http.get('../../../assets/wsdl/InventoryServiceTekweld.wsdl', {responseType: 'text'}).subscribe(response => {
      if (response) {
      //  this.client = this.soap.createClient(response);
        this.client = this.soap.createClient(response);
         console.log('todo es bueno!', this.soap);
        this.callOperation();
          
      }else{
        console.log('nada es bueno');
      }
    });
  }
  
  callOperation(){
     //  this.clear();
    this.loading = true;
   // this.checkNumbers()

    this.resultLabel = 'A + B';
    const body = {
      intA: this.intA,
      intB: this.intB
    };
    
    
                this.client.operation('Add', body)
                .then(operation => {
                    if (operation.error) {
                        console.log('Operation error', operation.error);
                        return;
                    }

                    const url = operation.url;
                    this.http.post(url, operation.xml, { headers: operation.headers, responseType: 'text' }).subscribe(
                        response => {
                            const xmlResponse = response;

                            // 5. parse xml response into json
                            const jsonResponse = this.client.parseResponseBody(response);

                            try {
                                const message = jsonResponse.Body.AddResponse.AddResult;
                            } catch (error) {
                                console.log(error);
                            }
                        },
                        err => {
                            console.log('Error calling ws', err);
                        }
                    );
                })
                .catch(err => console.log('Error', err));
        }
  
  loadAllData() { 
          this.shippingService.getResults()
          .pipe(
                  catchError(() => of(this.alertService.error('Session Timed Out', true))),
                finalize(() => console.log('not sure what this does'))
            )
            .subscribe(data => {console.log('HAJAHSASD: ', data)},
                        error =>{console.log("HAJAHSASD Error")});
    }
}
