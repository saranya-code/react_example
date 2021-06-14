import { FETCH_POSTS, NEW_POST } from "../actions/types";
// import action from "../actions/postActions";

const initialState = {
  items: [],
  item: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
