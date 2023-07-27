import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAge]'
})
export class AgeDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
   }

}
