export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SEARCHRECIPE":
      return action.payload;
    default:
      return state;
  }
};
