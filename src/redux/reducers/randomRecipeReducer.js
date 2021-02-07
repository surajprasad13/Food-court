export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_RANDOMRECIPE":
      return action.payload;
    default:
      return state;
  }
};
