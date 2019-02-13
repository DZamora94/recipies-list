import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NewPageComponent } from './screens/new-page/new-page.component';
import { DetailPageComponent } from './screens/detail-page/detail-page.component';
import { SearchPageComponent } from './screens/search-page/search-page.component';
import { ListPageComponent } from './screens/list-page/list-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRecipeFormComponent } from './components/new-recipe-form/new-recipe-form.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [
    ListPageComponent,
    SearchPageComponent,
    SearchFormComponent,
    DetailPageComponent,
    NewPageComponent,
    RecipeDetailComponent,
    NewRecipeFormComponent,
  ],
  declarations: [
    ListPageComponent,
    SearchPageComponent,
    SearchFormComponent,
    DetailPageComponent,
    NewPageComponent,
    RecipeDetailComponent,
    NewRecipeFormComponent,
  ],
})
export class RecipiesModule { }
