import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="ui  menu">
        <div className="item">
          <i className="ui large green food icon" />
          <h2>Food App</h2>
        </div>
        <a className="item active" href="./">
          Home
        </a>
        <a className="item" href="./">
          Recipe
        </a>
        <a className="item " href="./">
          Ingredients
        </a>

        <a className="item" href="./">
          Products
        </a>

        <a className="item" href="./">
          Menu Items
        </a>

        <a className="item" href="./">
          Meal Planning
        </a>
        <a className="item" href="./">
          Wine
        </a>
        <div className="item">
          <div className="ui primary button">Sign Up</div>
        </div>
      </div>
    );
  }
}

export default Header;
