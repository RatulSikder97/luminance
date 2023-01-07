import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignerComponent } from './designer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'designer', component: DesignerComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignerRoutingModule { }
