import {DRAWABLE_WITH_VALUE} from '../actions/types';
const initialState = {
  width: 200,
};

export default function drawableWidthRed(state = initialState, action) {
  switch (action.type) {
    case DRAWABLE_WITH_VALUE:
      return action.payload;
    default:
      return state;
  }
}
