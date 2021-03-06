import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from './services/auth_service';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        apiUrl: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000',
        profile: {}
    },
    mutations: {
        authenticate(state, payload){
            state.isLoggedIn = auth.isLoggedIn();
            if(state.isLoggedIn){
                state.profile = payload;
            }else{
                state.profile = {};
            }
        }
    },
    actions: {
        authenticate(context, payload){
            context.commit('authenticate', payload);
        }
    }


})
