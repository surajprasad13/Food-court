export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SELECTEDRECIPE":
      return action.payload;
    default:
      return state;
  }
};
