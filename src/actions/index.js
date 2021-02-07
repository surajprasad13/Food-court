import spooncular from "../apis/spooncular";

export const fetchJoke = () => async dispatch => {
  try {
    const response = await spooncular.get("/food/jokes/random", {
      params: {
        apiKey: "46487cd2113249a7a7165fabfc4b4d23"
      }
    });
    dispatch({ type: "FETCH_JOKE", payload: response });
  } catch (err) {
    return null;
  }
};

export const fetchRandomRecipe = () => async dispatch => {
  try {
    const response = await spooncular.get("/recipes/random", {
      params: {
        number: 12,
        apiKey: "46487cd2113249a7a7165fabfc4b4d23"
      }
    });
    dispatch({ type: "FETCH_RANDOMRECIPE", payload: response });
  } catch (err) {
    return null;
  }
};

export const fetchSearchRecipe = term => async dispatch => {
  try {
    const response = await spooncular.get("recipes/search", {
      params: {
        query: term,
        number: 10,
        apiKey: "46487cd2113249a7a7165fabfc4b4d23"
      }
    });
    dispatch({ type: "FETCH_SEARCHRECIPE", payload: response });
  } catch (err) {
    return null;
  }
};

export const fetchSelectedRecipe = id => async dispatch => {
  try {
    const response = await spooncular.get(`recipes/${id}/information`, {
      params: {
        apiKey: "46487cd2113249a7a7165fabfc4b4d23"
      }
    });
    dispatch({ type: "FETCH_SELECTEDRECIPE", payload: response });
  } catch (err) {
    return null;
  }
};