
export interface Recipie {
  id: string;
  name: string;
  principalIngredient: string;
  ingredients: string[];
  time: number;
  dificulty: string;
}

export enum Dificulty {
  Easy = 'Facil',
  Medium = 'Media',
  Medium_Hard = 'Media-Dificil',
  Hard = 'Dificil',
  Very_Hard = 'Muy dificil',
}
