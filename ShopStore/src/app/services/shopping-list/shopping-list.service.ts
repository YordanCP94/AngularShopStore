import { Ingredient } from 'src/app/components/shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',10)
  ];

  addIngredientToList(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  getIngredients(): Ingredient[]{
   return this.ingredients; 
  }
  
  constructor() { }
}
