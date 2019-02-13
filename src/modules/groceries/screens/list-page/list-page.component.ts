import { Observable } from 'rxjs';
import { APP_ROUTES } from './../../../../app/app.routes';
import { TableModel } from './../../../../app/shared/models/table.model';
import { Recipie } from './../../models/recipie.model';
import { RecipiesDataService } from './../../services/recipies-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'gl-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public tableDataStructure: TableModel[];
  public tableDataObs: Observable<Recipie[]>;
  public tableDataStructureObs: Observable<TableModel[]>;

  constructor(
    private dataService: RecipiesDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.tableDataStructureObs = this.dataService.getTableDataStructure();
    this.tableDataObs = this.dataService.getData();
  }

  public goToDetail(recipie: Recipie) {
    this.router.navigate(['/', APP_ROUTES.RECIPIE_DETAIL, recipie.id]);
    console.log('VOY A DETALLE: ', recipie);
  }

  public goToNewRecipie() {
    this.router.navigate(['/', APP_ROUTES.NEW_RECIPIE]);
  }
}
