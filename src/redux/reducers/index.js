import { NEXT_STEP, PREV_STEP, TOGGLE_APP} from "../../constants/action-type";

const initialState = {
  mode: 1,
  posts: [],
  formStep: 1
};

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE_APP) {
    state.mode  = action.payload;
  }
  if (action.type === NEXT_STEP){
    state.formStep = action.payload;
  }
  if(action.type === PREV_STEP){
    state.formStep = action.payload;
  }
  return state;
}

export default rootReducer;