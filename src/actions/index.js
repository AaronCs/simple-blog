export const AUTH = 'AUTH';
export const NEW_POST = 'NEW_POST';

export function authUser(username, password) { // I will probably remove this.
    return {
      type: AUTH,
      payload: {
          username,
          password
      },
    };
}

export function newPost(fieldValue, postId, author) {
    return {
        type: NEW_POST,
        payload: {
            ...fieldValue,
            postId,
            author,
        }
    };
}
