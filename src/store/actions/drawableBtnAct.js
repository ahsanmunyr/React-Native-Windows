import {DRAWABLE_WITH_VALUE} from './types';

export const drawableWidthChange =
  (val) =>
  async dispatch => {
    dispatch({
        type: DRAWABLE_WITH_VALUE,
        payload: {
            width:  val
        },
    });
  };
