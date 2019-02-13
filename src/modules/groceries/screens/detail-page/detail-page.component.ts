import { RecipiesDataService } from './../../services/recipies-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipie } from '../../models/recipie.model';

@Component({
  selector: 'gl-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  private id: string;
  public recipieObs: Observable<Recipie>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipiesService: RecipiesDataService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipieObs = this.recipiesService.getRecipie(this.id);
  }

}
