﻿import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import '../assets/app.css';
import { User } from './_models/index';
@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['/../assets/app.css'],

})

    
export class AppComponent {
   currentUser: User;
  _opened: boolean = true;
   _modeNum: number = 1;
   _positionNum: number = 0;
   _dock: boolean = false;
   _closeOnClickOutside: boolean = false;
   _closeOnClickBackdrop: boolean = false;
   _showBackdrop: boolean = false;
   _animate: boolean = true;
   _trapFocus: boolean = true;
   _autoFocus: boolean = false;
   _keyClose: boolean = false;
   _autoCollapseHeight: number = null;
   _autoCollapseWidth: number = 480;
   _MODES: Array<string> = ['over', 'push', 'slide'];
   _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
 public toggleBarIcon:boolean=true;

    getScreenSize() {
    return window.innerWidth;
  }

   _toggleOpened(): void {
    this._opened = !this._opened;
  }

   _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

   _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

   _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

   _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

   _toggleDock(): void {
    this._dock = !this._dock;
  }

   _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

   _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

   _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

   _toggleAnimate(): void {
    this._animate = !this._animate;
  }

   _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

   _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

   _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

   _onOpenStart(): void {
    console.info('Sidebar opening');
  }

   _onOpened(): void {
    console.info('Sidebar opened');
  }
  
   _onCloseStart(): void {
    console.info('Sidebar closing');
  }

   _onClosed(): void {
    console.info('Sidebar closed');
  }

   _onTransitionEnd(): void {
    console.info('Transition ended');
  }
  
   checkForUser():boolean{
  if(localStorage.getItem('currentUser')!=null){
    return true;
  }else{
      return false;
  }
}
  
   getUserName():string{
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return this.currentUser.fname;
  }
  }