import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomComponent } from './dom/dom.component';
import { DomModule } from './dom/dom.module';
import { LoginComponent } from './tasks-to-do/features/login/login/login.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/feature-a/feature-a.module').then(m => m.FeatureModule)
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./pages/feature-b/feature-b.module').then(m => m.FeatureBModule)
  },
  {
    path: 'jv',
    component: LoginComponent
  },
  {
    path: 'ahead',
    loadChildren: () => import('./typeahead/ahead/ahead.module').then(m => m.AheadModule)
  },
  {
    path: 'dom',
    component: DomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),DomModule],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class AppRoutingModule { }
