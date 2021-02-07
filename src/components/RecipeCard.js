import React from "react";

export const RecipeCard = ({ id, title, image, servings, readyInMinutes }) => {
  return (
    <div className="card" key={id}>
      <div className="image">
        <img src={image} alt="avatar" />
      </div>
      <div className="content">
        <a className="header" href="@">
          {title}
        </a>
      </div>
      <div className="extra content">
        <a href="@">
          <i className="user icon" />
          Servings-{servings}
        </a>
        <a href="@">
          <i className="stopwatch left icon" />
          Ready In Minutes-{readyInMinutes}
        </a>
      </div>
    </div>
  );
};
