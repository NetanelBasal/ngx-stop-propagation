import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from "@angular/core";


export class StopProp implements OnDestroy {
  @Input() protected eventOptions = {
    preventDefault: null,
    stopProp: null
  };
  protected _unsubscribe;

  protected listen(event, renderer, nativeElement, emitter, eventOptions) {
    return renderer.listen(nativeElement, event, event => {
      _handleEvents(eventOptions, event);
      event.stopPropagation();
      emitter.emit(event);
    });
  }

  ngOnDestroy() {
    this._unsubscribe();
  }
}


function _handleEvents({preventDefault, stopProp}, event) {
  preventDefault && event.preventDefault();
  stopProp && event.stopPropagation();
}

/**
 * The click event's propagation will be stopped
 * Usage:
 * <button (click.stop)="onClick($event, extraData)" [eventOptions]="{preventDefault: true}">Click Me!!</button>
 */
@Directive({
  selector: "[click.stop]"
})
export class StopPropClickDirective extends StopProp implements OnInit {
  @Output("click.stop") emitter = new EventEmitter();

  constructor(private renderer: Renderer2, private host: ElementRef) {
    super();
  }

  ngOnInit() {
    this._unsubscribe = this.listen("click", this.renderer, this.host.nativeElement, this.emitter, this.eventOptions);
  }
}


@Directive({
  selector: "[change.stop]"
})
export class StopPropChangeDirective extends StopProp implements OnInit {
  @Output("change.stop") emitter = new EventEmitter();

  constructor(private renderer: Renderer2, private host: ElementRef) {
    super();
  }

  ngOnInit() {
    this._unsubscribe = this.listen("change", this.renderer, this.host.nativeElement, this.emitter, this.eventOptions);
  }
}

@Directive({
  selector: "[mouseover.stop]"
})
export class StopPropMouseoverDirective extends StopProp implements OnInit {
  @Output("mouseover.stop") emitter = new EventEmitter();

  constructor(private renderer: Renderer2, private host: ElementRef) {
    super();
  }

  ngOnInit() {
    this._unsubscribe = this.listen("mouseover", this.renderer, this.host.nativeElement, this.emitter, this.eventOptions);
  }
}

@Directive({
  selector: "[mouseenter.stop]"
})
export class StopPropMouseenterDirective extends StopProp implements OnInit {
  @Output("mouseenter.stop") emitter = new EventEmitter();

  constructor(private renderer: Renderer2, private host: ElementRef) {
    super();
  }

  ngOnInit() {
    this._unsubscribe = this.listen("mouseenter", this.renderer, this.host.nativeElement, this.emitter, this.eventOptions);
  }
}

@Directive({
  selector: "[mouseleave.stop]"
})
export class StopPropMouseleaveDirective extends StopProp implements OnInit {
  @Output("mouseleave.stop") emitter = new EventEmitter();

  constructor(private renderer: Renderer2, private host: ElementRef) {
    super();
  }

  ngOnInit() {
    this._unsubscribe = this.listen("mouseleave", this.renderer, this.host.nativeElement, this.emitter, this.eventOptions);
  }
}

export const stopPropDirectives = [
  StopPropClickDirective,
  StopPropChangeDirective,
  StopPropMouseoverDirective,
  StopPropMouseenterDirective];
