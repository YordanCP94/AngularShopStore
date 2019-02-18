import { EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/components/recipes/recipe.model';
import { Ingredient } from 'src/app/components/shared/ingredient.model';


export class RecipeService {

  RecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe("Pizza","This is a peperoni Pizza",
    "https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_728,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg",
    [
      new Ingredient("Bread", 1),
      new Ingredient("Peperoni", 10),
    ]),
    new Recipe("Cereal Bowl","This is a cereal bowl",
    "https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_728,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg",
    [
      new Ingredient("Cereal", 40),
      new Ingredient("Milk", 1)
    ])
  ];

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }

}
