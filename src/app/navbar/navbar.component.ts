import { User } from '../_models/index';
import { AuthenticationService } from '../_services/index';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit { 
  currentUser: User;
  isLoggedIn$: Observable<boolean>;   
    public toggleBarIcon:boolean=true;

//    isNavbarCollapsed = false;
//    isIn = false;   // store state
//    toggleState() { // click handler
//        let bool = this.isIn;
//        this.isIn = bool === false ? true : false; 
//        }
    toggle():void{
  //  let self=this;
    setTimeout(()=>{
      this.toggleBarIcon=!this.toggleBarIcon;

    },500)
  }
   constructor(private authService: AuthenticationService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
  
    ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
           
