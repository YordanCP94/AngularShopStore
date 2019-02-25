import { Ingredient } from 'src/app/components/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',10)
  ];

  addIngredientToList(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
  }
  
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
  }

  getIngredients(): Ingredient[]{
   return this.ingredients; 
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }
  
  constructor() { }
}
