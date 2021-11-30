import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { ContentAChildComponent } from "./components/content-a-child/content-a-child.component";
import { ContentBFirstChildComponent } from "./components/content-b-first-child/content-b-first-child.component";
import { ContentBSecondChildComponent } from "./components/content-b-second-child/content-b-second-child.component";
import { RootFeatureAComponent } from "./components/root-feature-a/root-feature-a.component";
import { ContentAComponent } from "./containers/content-a/content-a.component";
import { ContentBComponent } from "./containers/content-b/content-b.component";
import { SidebarComponent } from "./containers/sidebar/sidebar.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RootFeatureAComponent,
                children: [
                    { path: '',component: ContentAComponent},
                    { path: 'b',component: ContentBComponent},
                    {
                        path: 'c',
                        loadChildren: () => import('./features/content-c/content-c.module').then(m => m.ContentCModule)
                    }
                ]
            }
        ]),
        ComponentsModule
    ],
    declarations: [
        RootFeatureAComponent,
        SidebarComponent,
        ContentAComponent,
        ContentBComponent,
        ContentAChildComponent,
        ContentBFirstChildComponent,
        ContentBSecondChildComponent
    ]
})
export class FeatureModule {

}