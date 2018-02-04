import {By} from "@angular/platform-browser";
import {Component} from "@angular/core";
import {stopPropDirectives} from "./stop-prop.directives";
import {TestBed} from "@angular/core/testing";

@Component({
  selector: "test",
  template: ``
})
class TestComponent {
  doSomething() {
  }

  onClick() {
    this.doSomething();
  }
}

describe("Stop Propagation Directives", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [stopPropDirectives, TestComponent],
    });
  });

  describe("Click", () => {
    it("should call the event handler and stopPropagation", () => {
      let fixture = createComp(`<button (click.stop)="onClick()">Click</button>`);

      const onClickSpy = spyOn(fixture.componentInstance, "onClick").and.callThrough();
      const doSomethingSpy = spyOn(fixture.componentInstance, "doSomething").and.callThrough();
      const button = fixture.debugElement.query(By.css("button"));

      fixture.detectChanges();
      const event = {
        stopPropagation: () => {
        }
      };
      const spyStopPropagation = spyOn(event, "stopPropagation");
      button.triggerEventHandler("click", event);
      expect(onClickSpy).toHaveBeenCalled();
      expect(doSomethingSpy).toHaveBeenCalled();
      expect(spyStopPropagation).toHaveBeenCalled();
    });

    it("should be able to pass data", () => {
      let fixture = createComp(`<button (click.stop)="onClick($event, 'data')">Click</button>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick");
      const button = fixture.debugElement.query(By.css("button"));

      fixture.detectChanges();
      const event = {
        stopPropagation() {
        }
      };
      button.triggerEventHandler("click", event);
      expect(onClickSpy).toHaveBeenCalledWith(event, "data");
    });
  });

  describe("Change", () => {
    it("should call the event handler and stopPropagation", () => {
      let fixture = createComp(`<button (change.stop)="onClick()">Change</button>`);

      const onClickSpy = spyOn(fixture.componentInstance, "onClick").and.callThrough();
      const doSomethingSpy = spyOn(fixture.componentInstance, "doSomething").and.callThrough();
      const button = fixture.debugElement.query(By.css("button"));

      fixture.detectChanges();
      const event = {
        stopPropagation: () => {
        }
      };
      const spyStopPropagation = spyOn(event, "stopPropagation");
      button.triggerEventHandler("change", event);
      expect(onClickSpy).toHaveBeenCalled();
      expect(doSomethingSpy).toHaveBeenCalled();
      expect(spyStopPropagation).toHaveBeenCalled();
    });

    it("should be able to pass data", () => {
      let fixture = createComp(`<button (change.stop)="onClick($event, 'data')">Click</button>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick");
      const button = fixture.debugElement.query(By.css("button"));

      fixture.detectChanges();
      const event = {
        stopPropagation() {
        }
      };
      button.triggerEventHandler("change", event);
      expect(onClickSpy).toHaveBeenCalledWith(event, "data");
    });
  });

  describe("Mouseover", () => {
    it("should call the event handler and stopPropagation", () => {
      let fixture = createComp(`<div (mouseover.stop)="onClick()">Change</div>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick").and.callThrough();
      const doSomethingSpy = spyOn(fixture.componentInstance, "doSomething").and.callThrough();
      const div = fixture.debugElement.query(By.css("div"));

      fixture.detectChanges();
      const event = {
        stopPropagation: () => {
        }
      };
      const spyStopPropagation = spyOn(event, "stopPropagation");
      div.triggerEventHandler("mouseover", event);
      expect(onClickSpy).toHaveBeenCalled();
      expect(doSomethingSpy).toHaveBeenCalled();
      expect(spyStopPropagation).toHaveBeenCalled();
    });

    it("should be able to pass data", () => {
      let fixture = createComp(`<div (mouseover.stop)="onClick($event, 'data')">Click</div>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick");
      const div = fixture.debugElement.query(By.css("div"));

      fixture.detectChanges();
      const event = {
        stopPropagation() {
        }
      };
      div.triggerEventHandler("mouseover", event);
      expect(onClickSpy).toHaveBeenCalledWith(event, "data");
    });
  });

  describe("Mousenter", () => {
    it("should call the event handler and stopPropagation", () => {
      let fixture = createComp(`<div (mouseenter.stop)="onClick()">Change</div>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick").and.callThrough();
      const doSomethingSpy = spyOn(fixture.componentInstance, "doSomething").and.callThrough();
      const div = fixture.debugElement.query(By.css("div"));

      fixture.detectChanges();
      const event = {
        stopPropagation: () => {
        }
      };
      const spyStopPropagation = spyOn(event, "stopPropagation");
      div.triggerEventHandler("mouseenter", event);
      expect(onClickSpy).toHaveBeenCalled();
      expect(doSomethingSpy).toHaveBeenCalled();
      expect(spyStopPropagation).toHaveBeenCalled();
    });

    it("should be able to pass data", () => {
      let fixture = createComp(`<div (mouseenter.stop)="onClick($event, 'data')">Click</div>`);
      const onClickSpy = spyOn(fixture.componentInstance, "onClick");
      const div = fixture.debugElement.query(By.css("div"));

      fixture.detectChanges();
      const event = {
        stopPropagation() {
        }
      };
      div.triggerEventHandler("mouseenter", event);
      expect(onClickSpy).toHaveBeenCalledWith(event, "data");
    });
  });

});

/**
 *
 * @param template
 * @returns {ComponentFixture<TestComponent>}
 */
function createComp(template) {
  return TestBed.overrideComponent(TestComponent, {
    set: {
      template
    }
  }).createComponent(TestComponent);
}
