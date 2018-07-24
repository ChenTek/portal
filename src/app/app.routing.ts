import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { OpenOrdersComponent, OrderHistoryComponent, SearchOrderComponent } from './orders/index';
import { EproofComponent } from './eproof/eproof.component'
import { AuthGuard } from './_guards/index';
import { MissingArtworkComponent } from './missing-artwork/missing-artwork.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StitchApprovalComponent } from './stitch-approval/stitch-approval.component';
import { PreProductionApprovalComponent } from './pre-production-approval/pre-production-approval.component';
import { ShipEstimateComponent } from './ship-estimate/ship-estimate.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'open-orders', component: OpenOrdersComponent, canActivate: [AuthGuard] },
    { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
    { path: 'search-order', component: SearchOrderComponent, canActivate: [AuthGuard] },
    { path: 'eproof', component: EproofComponent, canActivate: [AuthGuard] },
    { path: 'pay-bills', component: PayBillsComponent, canActivate: [AuthGuard] },
    { path: 'missing-artwork', component: MissingArtworkComponent, canActivate: [AuthGuard] },
    { path: 'estimates', component: EstimatesComponent, canActivate: [AuthGuard] },
    { path: 'stitch-approval', component: StitchApprovalComponent, canActivate: [AuthGuard] },
    { path: 'pre-production-approval', component: PreProductionApprovalComponent, canActivate: [AuthGuard] },
    { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
    { path: 'ship-estimate', component: ShipEstimateComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);