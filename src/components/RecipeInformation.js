import React from "react";
import { connect } from "react-redux";
import { fetchSelectedRecipe } from "../actions";

class RecipeInformation extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedRecipe(648320);
  };

  renderInformation() {
    const data = this.props.selectedRecipe.data;
    console.log(data);
    if (!data) {
      return <div>Unable to fetch</div>;
    } else {
      return (
        <div className="ui container segment items">
          <a className="ui centered  image" href="@">
            <img src={data.image} alt="avatar" />
          </a>
          <div className="item">
            <div className="content">
              <a className="header" href="@">
                {data.title}
              </a>
              <i className="ui user icon" />
              servings-{data.servings}
              <i className="ui stopwatch icon" />
              readyinminutes-{data.readyInMinutes}
              <div className="description">
                <p>{data.summary}</p>
                <p>
                  <i className="ui tag icon" />
                  {data.dishTypes.join(",")}
                </p>
                <i className="ui user icon" />
                Credits-{data.creditsText}
              </div>
              <div className="extra">
                <h3>Ingredients</h3>
                <div className="ui horizontal list">
                  {data.extendedIngredients.map(ing => (
                    <div className="item">
                      <img
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${
                          ing.image
                        }`}
                        alt="ing"
                      />
                      <div class="content">
                        <div class="header">{ing.name}</div>
                        amount-{ing.amount} ||unit-{ing.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <>{this.renderInformation()}</>;
  }
}

const mapStateToProps = state => {
  return { selectedRecipe: state.selectedRecipe };
};

export default connect(
  mapStateToProps,
  { fetchSelectedRecipe }
)(RecipeInformation);
