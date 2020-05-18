import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Steak',
      imageUrl: 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/05/testkitchen_argentinesteak.jpg?resize=1280%2C%20560&ssl=1',
      ingredients: [
          'Meal',
          'Souse',
          'Salad'
      ]
    },
    {
      id: 'r2',
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

  ngOnInit() {
  }

}
