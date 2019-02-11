import { TableModel } from './../../models/table.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data;
  @Input() dataStructure: TableModel[];

  @Output() element = new EventEmitter();

  public displayedColumns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.dataStructure.map(data => data.columnId);
    console.log(this.dataStructure);
  }

  public clickedElement(elementToEmit: any) {
    this.element.emit(elementToEmit);
  }

}
