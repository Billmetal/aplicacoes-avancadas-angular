import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentCChildComponent } from "./components/content-c-child/content-c-child.component";
import { RootContentCComponent } from "./containers/root-content-c/root-content-c.component";
import { ContentCService } from "./services/content-c.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RootContentCComponent
            }
        ])
    ],
    declarations: [RootContentCComponent,ContentCChildComponent],
    providers: [
        ContentCService
    ]
})
export class ContentCModule {}