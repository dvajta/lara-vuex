import store from '../store';
import axios from 'axios';
import * as auth from './auth_service';


export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: 'Bearer '+auth.getAccessToken(),
        }

    });
}

export function httpFile() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: 'Bearer '+auth.getAccessToken(),
            'Content-Type': 'multipart/form-data',

        }
    });
}
