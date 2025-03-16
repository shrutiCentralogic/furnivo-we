import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [LayoutComponent,ComingSoonComponent,MainComponent],
  exports: [LayoutComponent,ComingSoonComponent,MainComponent
  ]
})
export class LayoutModule { }
