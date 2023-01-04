import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') highlightColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input() highlightTextColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.textColor = 'initial';
    if (!this.highlightColor) {
      this.highlightColor = 'blue';
    }
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.textColor = this.highlightTextColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.textColor = 'initial';
  }
}
