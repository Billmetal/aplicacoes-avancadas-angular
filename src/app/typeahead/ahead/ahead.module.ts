import { NgModule } from "@angular/core";
import { TypeaheadComponent } from "../typeahead.component";
import { AheadComponent } from "./ahead.component";

@NgModule({
    declarations: [
        AheadComponent,
        TypeaheadComponent
    ],
    exports: [
        AheadComponent
    ]
})
export class AheadModule {

}