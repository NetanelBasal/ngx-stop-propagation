import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {stopPropDirectives} from "./stop-prop.directives";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    stopPropDirectives
  ],
  exports: [
    stopPropDirectives
  ]
})
export class StopPropagationModule {
}
