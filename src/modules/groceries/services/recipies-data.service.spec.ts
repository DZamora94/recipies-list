/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipiesDataService } from './recipies-data.service';

describe('Service: RecipiesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipiesDataService]
    });
  });

  it('should ...', inject([RecipiesDataService], (service: RecipiesDataService) => {
    expect(service).toBeTruthy();
  }));
});
