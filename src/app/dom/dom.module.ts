import { NgModule } from "@angular/core";
import { DomChildComponent } from "./child/dom-child.component";
import { DomForDirective } from "./dom-for.directive";
import { DomIfDirective } from "./dom-if.directive";
import { DomSwitchCaseDirective, DomSwitchDirective } from "./dom-switch.directive";
import { DomComponent } from "./dom.component";

@NgModule({
    declarations: [
        DomComponent,
        DomIfDirective,
        DomChildComponent,
        DomForDirective,
        DomSwitchDirective,
        DomSwitchCaseDirective
    ]
})
export class DomModule {

}