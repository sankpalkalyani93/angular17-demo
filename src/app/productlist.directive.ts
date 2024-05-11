import { Directive,  ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductlist]'
})
export class ProductlistDirective  implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }

}
