import { RecipiesDataService } from './../../services/recipies-data.service';
import { Dificulty } from './../../models/recipie.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'gl-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.scss']
})
export class NewRecipeFormComponent implements OnInit {

  public recipieForm: FormGroup;

  public posibleTimes: Observable<number[]>;
  public possibleDificulty = Dificulty;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: RecipiesDataService,
  ) { }

  ngOnInit() {
    this.getData();
    this.buildForm();
  }

  get formValue() {
    return this.recipieForm.value();
  }

  private buildForm() {
    this.recipieForm = this.formBuilder.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      principalIngredient: [null, Validators.required],
      ingredients: [null, Validators.required],
      time: [null, Validators.required],
      dificulty: [null, Validators.required],
      description: [null, Validators.required],
      aditionalInfo: [null],
    });
  }

  private getData() {
    this.posibleTimes = this.dataService.getPosibleTimes();
  }

  public save() {
    console.log(this.recipieForm.value);
  }

}
