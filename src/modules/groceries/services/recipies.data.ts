import { Dificulty } from './../models/recipie.model';
import { TableModel } from './../../../app/shared/models/table.model';
import { Recipie } from '../models/recipie.model';

export const COLUMNS_DATA: TableModel[] = [
  {
    columnId: 'name',
    columnName: 'Nombre de la Receta',
  },
  {
    columnId: 'principalIngredient',
    columnName: 'Ingrediente principal',
  },
  {
    columnId: 'ingredients',
    columnName: 'Ingredientes',
  },
  {
    columnId: 'time',
    columnName: 'Tiempo estimado',
  },
  {
    columnId: 'dificulty',
    columnName: 'Dificultad',
  },
];

export const POSIBLE_TIMES: number[] = [5, 10, 15, 20, 30, 45, 60, 75, 120, 150, 180, 240, 320];

export const ELEMENT_DATA: Recipie[] = [
  {id: '1', name: 'Albondigas', principalIngredient: 'Carne picada',
    ingredients: ['carne picada', 'huevo', 'cebolla', 'pan rallado', 'perejil'], time: 180, dificulty: Dificulty.Medium},
  {id: '2', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '3', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '4', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '5', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '6', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '7', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '8', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
  {id: '9', name: 'Salsa de Tomate', principalIngredient: 'Tomate',
    ingredients: ['Un bote de tomate, no te lies'], time: 60, dificulty: Dificulty.Easy},
];
