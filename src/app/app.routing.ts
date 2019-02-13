import { APP_ROUTES } from './app.routes';
import { DetailPageComponent } from './../modules/groceries/screens/detail-page/detail-page.component';
import { ListPageComponent } from './../modules/groceries/screens/list-page/list-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewPageComponent } from 'src/modules/groceries/screens/new-page/new-page.component';

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    redirectTo: APP_ROUTES.RECIPIES_LIST,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.RECIPIES_LIST,
    component: ListPageComponent,
    pathMatch: 'full'
  },
  {
    path: `${APP_ROUTES.RECIPIE_DETAIL}${APP_ROUTES.ID_PARAM}`,
    component: DetailPageComponent,
  },
  {
    path: APP_ROUTES.NEW_RECIPIE,
    component: NewPageComponent,
  },
  {
    path: APP_ROUTES.ANYTHING,
    redirectTo: APP_ROUTES.RECIPIES_LIST,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
