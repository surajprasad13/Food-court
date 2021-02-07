import React from "react";
import { connect } from "react-redux";
import { fetchRandomRecipe } from "./../redux/actions";
import { RecipeCard } from "./RecipeCard";

class RandomRecipe extends React.Component {
  componentDidMount() {
    this.props.fetchRandomRecipe();
  }

  renderList() {
    const data = this.props.randomRecipe.data;
    if (!data) {
      return (
        <div className="ui three doubling stackable cards">
          <div className="ui card">
            <div className="image">
              <div className="ui placeholder">
                <div className="square image" />
              </div>
            </div>
            <div className="content">
              <div className="ui placeholder">
                <div className="header">
                  <div className="very short line" />
                  <div className="medium line" />
                </div>
                <div className="paragraph">
                  <div className="short line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const list = data.recipes.map(myFunc);
      function myFunc({ id, title, image, servings, readyInMinutes }) {
        return (
          <>
            <RecipeCard id={id} title={title} image={image} servings={servings} readyInMinutes={readyInMinutes} />
          </>
        );
      }
      return <div className="ui link cards">{list}</div>;
    }
  }

  render() {
    return (
      <div className="ui container segment">
        <h1>Random Recipe</h1>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomRecipe: state.randomRecipe,
  };
};

export default connect(mapStateToProps, { fetchRandomRecipe })(RandomRecipe);
