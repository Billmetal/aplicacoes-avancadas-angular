import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FirstSharedComponentComponent } from "./first-shared-component/first-shared.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FirstSharedComponentComponent
    ],
    exports: [
        FirstSharedComponentComponent
    ]
})
export class ComponentsModule {

}