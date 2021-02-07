import { combineReducers } from "redux";
import JokeReducer from "./JokeReducer";
import randomRecipeReducer from "./randomRecipeReducer";
import searchReducer from "./searchReducer";
import selectReducer from './selectReducer'


export default combineReducers({
  jokes: JokeReducer,
  randomRecipe: randomRecipeReducer,
  searchRecipe: searchReducer,
  selectedRecipe:selectReducer
});
