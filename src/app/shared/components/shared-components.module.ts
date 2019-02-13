import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  exports: [
    ListComponent,
    TableComponent,
  ],
  declarations: [
    ListComponent,
    TableComponent,
  ]
})
export class SharedComponentsModule { }
