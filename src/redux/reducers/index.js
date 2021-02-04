import { TOGGLE_APP} from "../../constants/action-type";

const initialState = {
  mode: 1,
  posts: []
};

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE_APP) {
    state.mode  = action.payload;
  }
  return state;
}

export default rootReducer;