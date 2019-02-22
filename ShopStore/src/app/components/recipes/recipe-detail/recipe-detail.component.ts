import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe:Recipe;
  id: number;

  constructor(private slService: ShoppingListService, private recipeService: RecipeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.recipe = this.recipeService.getRecipes()[this.id];      
      }
    );
  }

  addToShoppingList(){
    this.recipe.ingredients.forEach(ingredient => {
      this.slService.addIngredientToList(ingredient);
    });
  }

}
