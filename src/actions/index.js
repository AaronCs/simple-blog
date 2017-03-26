import { REDIRECT, NEW_POST, REMOVE_POST, LOGIN, LOGOUT, ACTIVE_TAB_CHANGE } from './types';
import database, { authProvider } from '../firebase/index';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

// TODO: Access the auth instance for firebase for users so they
// won't have to login each time.

export function redirectUrl(currentUrl) {
    return {
        type: REDIRECT,
        payload: currentUrl,
    };
}

export function userLogin(username) {
    return {
        type: LOGIN,
        payload: {
            username,
            uid: username.uid,
        }
    };
}

export function beginningLoginAuth() {
    return dispatch => {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user) {
                dispatch(userLogin(user));
            }
        });
    };
}

export function userLoginAuth() {
    return dispatch => {
        const user = firebase.auth().currentUser;
        if(!user) {
            firebase.auth().signInWithRedirect(authProvider).then( (result) => {
                const token = result.credential.accessToken;
                const user = result.user;
                dispatch(userLogin(user));
                // Redirects user back to previous page.
                browserHistory.goBack();
            });
        }
    };
}

export function userLogout() {
    return dispatch => {
        firebase.auth().signOut().then( () => {
            dispatch(logout());
        });
        browserHistory.replace('login'); // Forcibly replaces history.
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}

export function removePost(post_id, i) {
    // Find child in db, remove child from db.
    // Call dispatch to unpopulate post.
    return dispatch => {
        // Might not need to do this
        database.ref('posts').child(post_id).remove().then(
            () => {
                dispatch(unpopulatePosts(i));
            },
            () => {
                console.log('Fail');
            }
        );
    };
}

export function fetchPosts() {
    return dispatch => {
        database.ref('posts').on('child_added', (snapshot) => {
            // FIXME: Something goes wrong when removing items.
            dispatch(populatePosts(snapshot.val(), snapshot.key));
        });
    };
}

export function unpopulatePosts(i) {
    return {
        type: REMOVE_POST,
        i,
    };
}

export function populatePosts(data, post_id) {
    return {
        type: NEW_POST,
        payload: {
            title: data.title,
            content: data.content,
            author: data.author,
            post_id,
            uid: data.uid,
        },
    };
}

// fieldValue is an obj with content and title
export function newPost(fieldValue, author, uid) {
    return dispatch => {
        let post = database.ref('posts').push({
            content: fieldValue.content,
            title: fieldValue.title,
            author,
            uid,
        });
    };
}

/*{
        type: NEW_POST,
        payload: {
            ...fieldValue,
            postId,
            author,
        }
    }; */
