import { NEW_POST } from '../actions/index';

const INITIAL_STATE =[];

export default function(state=INITIAL_STATE, action) {
  // Grab posts from firebase and populate posts
  // Each post should have a unique post id.
    switch(action.type) {
        case NEW_POST:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
}
