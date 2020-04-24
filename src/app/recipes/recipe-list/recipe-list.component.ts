import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply test recipe',  'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-600w-370298699.jpg'),
    new Recipe('A new recipe', 'this is so sweet recipe recipe',  'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-600w-370298699.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
