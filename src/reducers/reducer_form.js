import { reducer as formReducer } from 'redux-form';
import { NEW_POST } from '../actions/types';

export default formReducer.plugin({
    newPost: (state, action) => {
      switch(action.type) {
        case NEW_POST:
          return {
            ...state,
            fields: {
              title: undefined,
              content: undefined,
            },
            values: {
              title: undefined,
              content: undefined,
            }
          };
          default:
            return state;
      }
    }
  });
