import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is a simple test",
    "https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_728,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg"),
    new Recipe("A Test Recipe","This is a simple test",
    "https://media.self.com/photos/58f7d022feead55f43f7fc78/4:3/w_728,c_limit/Creamy-Sun-Dried-Parmesan-Chicken-cafedelites-1%25202.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
