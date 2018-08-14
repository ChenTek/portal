import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSoapModule } from 'ngx-soap';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';;

import { NgxImageZoomModule } from 'ngx-image-zoom';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { ScrollTrackerDirective } from './_directives/scroll-tracker';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule, MatProgressBarModule, MatExpansionModule, 
         MatTooltipModule, MatSelectModule, MatDialogModule, MatRadioModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatCheckboxModule } from "@angular/material";
import { AlertService, AuthenticationService, UserService, OrdersService, EproofService, MissingArtworkService, PayBillsService, EstimatesService, StitchApprovalService, PreProductionApprovalService, UpsShippingService, InventoryService, ImageService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenOrdersComponent, SearchOrderComponent, OrderHistoryComponent, OrderDetailsComponent } from './orders/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EproofComponent } from './eproof/eproof.component';
import { MissingArtworkComponent } from './missing-artwork/missing-artwork.component';
import { PdfviewerComponent, ShippingInfoComponent, ShippingInfoEditComponent } from './_dialogs/index';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { StitchApprovalComponent } from './stitch-approval/stitch-approval.component';
import { PreProductionApprovalComponent } from './pre-production-approval/pre-production-approval.component';
import { ShipEstimateComponent } from './ship-estimate/ship-estimate.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShipEstimateWidgetComponent } from './ship-estimate/ship-estimate-widget/ship-estimate-widget.component';
import { InventoryWidgetComponent } from './inventory/inventory-widget/inventory-widget.component';
import {MatCardModule} from '@angular/material/card';

import { SidebarModule } from 'ng-sidebar';
import { ArtApprovalComponent } from './eproof/art-approval/art-approval.component';
import { ImageDialogComponent } from './_dialogs/image-dialog/image-dialog.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        PdfViewerModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxSoapModule,
    MatCardModule,
    SidebarModule.forRoot(),
     NgxImageZoomModule.forRoot()
        
    ],
    
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        OpenOrdersComponent,
        OrderHistoryComponent,
        SearchOrderComponent,
        EproofComponent,
        MissingArtworkComponent,
        OrderDetailsComponent,
        ScrollTrackerDirective,
        ShippingInfoComponent,
        ShippingInfoEditComponent,
        PdfviewerComponent,
        PayBillsComponent,
        EstimatesComponent,
        StitchApprovalComponent,
        PreProductionApprovalComponent,
        ShipEstimateComponent,
        InventoryComponent,
        ShipEstimateWidgetComponent,
        InventoryWidgetComponent,
        ArtApprovalComponent,
        ImageDialogComponent

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        OrdersService,
        EproofService,
        MissingArtworkService,
        PayBillsService,
        EstimatesService,
        StitchApprovalService,
        PreProductionApprovalService,
        UpsShippingService,
        InventoryService,
        ImageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent],
      entryComponents: [
    ShippingInfoComponent,
        PdfviewerComponent,
        ImageDialogComponent
  ]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)