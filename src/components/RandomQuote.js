import React from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions";

class RandomQuote extends React.Component {
  componentDidMount() {
    this.props.fetchJoke();
  }

  renderQuote() {
    const text = this.props.jokes.data;
    if (!text) {
      return null;
    }
    return (
      <div className="ui container segment">
        <h2>Food Joke</h2>
        {text.text}
      </div>
    );
  }

  render() {
    return <div>{this.renderQuote()}</div>;
  }
}

const mapStateToProps = state => {
  return { jokes: state.jokes };
};

export default connect(
  mapStateToProps,
  { fetchJoke }
)(RandomQuote);
