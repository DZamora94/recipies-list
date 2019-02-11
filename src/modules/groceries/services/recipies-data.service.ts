import { TableModel } from './../../../app/shared/models/table.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipie } from '../models/recipie.model';
import { COLUMNS_DATA, ELEMENT_DATA, POSIBLE_TIMES } from './recipies.data';

@Injectable({
  providedIn: 'root'
})
export class RecipiesDataService {

constructor() { }

public getData(): Observable<Recipie[]> {
  return of(ELEMENT_DATA);
}

public getTableDataStructure(): Observable<TableModel[]> {
  return of(COLUMNS_DATA);
}

public getRecipie(id: string): Observable<Recipie> {
  return of(ELEMENT_DATA.find(recipie => recipie.id === id));
}

public getPosibleTimes(): Observable<number[]> {
  return of(POSIBLE_TIMES);
}

}
