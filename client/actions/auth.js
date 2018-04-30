import axios from 'axios';

import * as consts from './constants';

export function getUserData(id) {
    return dispatch => {
        return axios.get(`/user/${id}`)
            .then(res => dispatch(setUser(res.data.user)))
            .catch(err => console.log(err))
    };
};
export function setUser(user) {
    return {
        type: consts.SET_NEW_USER,
        user
    }
};