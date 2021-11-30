import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { RootFeatureBComponent } from "./components/root-feature-b/root-feature-b.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RootFeatureBComponent
            }
        ]),
        ComponentsModule
    ],
    declarations: [RootFeatureBComponent]
})
export class FeatureBModule {}