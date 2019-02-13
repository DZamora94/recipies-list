import { AppRoutingModule } from './app.routing';
import { RecipiesModule } from '../modules/groceries/recipies.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    RecipiesModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
