export const AUTH = 'AUTH';

export function authUser(props) {
    return {
      type: AUTH,
      payload: props,
    };
}
