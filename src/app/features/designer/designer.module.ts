import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignerComponent } from './designer.component';
import { StudioComponent } from './pages/studio/studio.component';

@NgModule({
  declarations: [
    DesignerComponent,
    HeaderComponent,
    HomeComponent,
    StudioComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule,
  ]
})
export class DesignerModule { }
