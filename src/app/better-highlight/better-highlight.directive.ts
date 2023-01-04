import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') textColor: string = 'initial';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    /* this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white'); */
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.textColor = 'initial';
  }
}
