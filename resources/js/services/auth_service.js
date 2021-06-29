import {http, httpFile} from "./http_service";
import store from '../store';


export function register(user){
    return http().post('/auth/register', user);
}

export function login(user){
    return http().post('/auth/login', user)
        .then(response => {
            if(response.status === 200){
                setToken(response.data)
            }

            return response.data;
        });
}

function setToken(user){

    localStorage.setItem('cargo-user-token', JSON.stringify(user));
    store.dispatch('authenticate', user.user)
}

export function isLoggedIn() {
    const token = localStorage.getItem('cargo-user-token');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');

    localStorage.removeItem('cargo-user-token');
}

export function getAccessToken(){
    const token = localStorage.getItem('cargo-user-token');
    if(!token){
        return null;
    }

    const tokenData = JSON.parse(token);

    return tokenData.access_token;
}

export function getProfile()
{
    return http().get('/auth/profile');
}

export function getRoleUser()
{

    return store.state.profile.role;
}

export function getUserId()
{
    return store.state.profile.id;
}
