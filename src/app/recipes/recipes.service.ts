import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Steak',
      imageUrl: 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/05/testkitchen_argentinesteak.jpg?resize=1280%2C%20560&ssl=1',
      ingredients: [
        'Meal',
        'Souse',
        'Salad'
      ]
    },
    {
      id: '2',
      title: 'Spaghetti',
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',
      ingredients: [
        'Spaghetti',
        'Tomatoes',
        'Cheese'
      ]
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => (recipe.id !== recipeId));
  }
}
