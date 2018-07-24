import {
  Directive, HostListener, ElementRef, Output, EventEmitter
}
from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() trigger:EventEmitter<any> = new EventEmitter();

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log('called');
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    let tracker = event.target;

    let limit = (tracker.scrollHeight - tracker.clientHeight) *0.999; //that how it goes TODO: to fix the double paging - remove the *0.999
  //  console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop >= (limit)) {
  //    console.log('end reached');
      this.trigger.emit("end reached");
    }
        if (event.target.scrollTop <= 0) {
  //    console.log('start reached');
      this.trigger.emit("start reached");
    }
  }

  constructor(private el: ElementRef) {
  }
}