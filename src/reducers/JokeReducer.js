export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_JOKE":
      return action.payload;
    default:
      return state;
  }
};
