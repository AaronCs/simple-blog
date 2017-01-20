const INITIAL_STATE = {
  posts: [1, 2, 3]
};

export default function(state=INITIAL_STATE, action) {
  // Grab posts from firebase and populate posts
    switch(action.type) {
      default:
        return state;
    }
}
