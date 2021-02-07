import React from "react";
import { connect } from "react-redux";
import { fetchSearchRecipe } from "../actions";
import { RecipeCard } from "./RecipeCard";

class SearchRecipe extends React.Component {
  state = { term: [] };

  onChange = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
    this.props.fetchSearchRecipe(this.state.term);
  };

  renderList() {
    const data = this.props.searchRecipe.data;
    if (!data) {
      return null;
    } else {
      const list = data.results.map(myFunc);
      function myFunc({ id, title, servings, readyInMinutes }) {
        return (
          <>
            <RecipeCard
              id={id}
              title={title}
              image={` https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
              servings={servings}
              readyInMinutes={readyInMinutes}
            />
          </>
        );
      }
      return <div className="ui link cards">{list}</div>;
    }
  }

  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui big fluid icon input">
            <input
              value={this.state.term}
              onChange={this.onChange}
              type="text"
              placeholder="Search Recipe..."
            />
            <i className="inverted circular search link icon" />
          </div>
        </form>
        <>{this.renderList()}</>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { searchRecipe: state.searchRecipe };
};

export default connect(mapStateToProps, { fetchSearchRecipe })(SearchRecipe);
