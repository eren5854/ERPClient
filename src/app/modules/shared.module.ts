import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../components/section/section.component';
import { BlankComponent } from '../components/blank/blank.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BlankComponent, 
    SectionComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    BlankComponent, 
    SectionComponent
  ]
})
export class SharedModule { }
