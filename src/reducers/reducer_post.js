import { NEW_POST, REMOVE_POST } from '../actions/types';

const INITIAL_STATE =[];

export default function(state=INITIAL_STATE, action) {
  // Grab posts from firebase and populate posts
  // Each post should have a unique post id.
    switch(action.type) {
        case REMOVE_POST:
          return [
              ...state.slice(0, action.i),
              ...state.slice(action.i + 1),
          ];
        case NEW_POST:
            if(state.find( (post) => {
                // Prevents duplicates from appearing when deleting posts
                // if a different user tries to delete things.
                return post.post_id == action.payload.post_id;
            })) {
                return [...state];
            }
            return [
                action.payload,
                ...state,
            ];
        default:
            return state;
    }
}
