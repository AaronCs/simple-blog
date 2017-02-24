import { NEW_POST, REMOVE_POST } from './types';
import database from '../firebase/index';

export function removePost(post_id, i) {
    // Find child in db, remove child from db.
    // Call dispatch to unpopulate post.
    return dispatch => {
        // Might not need to do this
        database.ref('posts').child(post_id).remove().then(
            () => {
                dispatch(unpopulatePosts(i));
            }
        );
    };
}

export function fetchPosts() {
    return dispatch => {
        database.ref('posts').on('child_added', (snapshot) => {
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
        },
    };
}

// fieldValue is an obj with content and title
export function newPost(fieldValue, author) {
    return dispatch => {
        let post = database.ref('posts').push({
            content: fieldValue.content,
            title: fieldValue.title,
            author,
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
