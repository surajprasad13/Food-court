import React from "react";
import Header from "./Header";
import RandomQuote from "./RandomQuote";
import RandomRecipe from "./RandomRecipe";
import Footer from "./Footer";
import SearchRecipe from "./SearchRecipe";
import RecipeInformation from "./RecipeInformation";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <RandomQuote />
        <SearchRecipe />
        <RandomRecipe />
        <RecipeInformation />
        <Footer />
      </>
    );
  }
}

export default App;
