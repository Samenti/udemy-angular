import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy
{
  // @Input('srvElement') element: {
  //   type: string;
  //   name: string;
  //   content: string;
  // };
  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    // runs on construction of the component class
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // runs on data-bound input changes, first right before ngOnInit()
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    // runs on initialization of properties, after Angular first displays the component
    console.log('ngOnInit called!');
    // console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    // runs on every change detection run (after ngOnChanges() and ngOnInit())
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    // runs after ng-content projection
    console.log('ngAfterContentInit called!');
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    // runs after ng-content change detection
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    // runs after Angular initializes the views of the component and its children
    console.log('ngAfterViewInit called!');
    // console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // runs after change detection on the views of the component and its children
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    // runs on the destruction of the component
    console.log('ngOnDestroy called!');
  }
}
