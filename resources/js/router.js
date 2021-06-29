import Vue from 'vue';
import Router from 'vue-router';
import Index from "./views/admin/Index";
import Main from "./views/Main";
import * as auth from './services/auth_service';
import store from './store';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/dashboard',
        component: () => import('./views/user/Index.vue'),
        children:[
            {
                path: 'info',
                name: 'info',
                component: () => import('./views/user/Info.vue')

            },
            {
                path: 'add-order',
                name: 'add-order',
                component: () => import('./views/user/AddOrder.vue'),
            },
            {
                path: 'orders',
                name: 'user-orders',
                component: () => import('./views/user/Orders.vue'),
            },
            {
                path: 'driver-orders',
                name: 'driver-orders',
                component: () => import('./views/user/DriverOrders.vue'),
            }
        ],
        beforeEnter(to,from,next){
            if(!auth.isLoggedIn()) {
                next('/login')
            } else {
                next()
            }
        }
    },
    {
        path: '/admin',
        component: Index,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/admin/Dashboard.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('./views/admin/Categories.vue')
            },
        ],
        beforeEnter(to,from,next){
            if(!auth.isLoggedIn()) {
                next('/login')
            } else {
                let role = auth.getRoleUser();
                if(role === 'admin'){
                    next()
                }else{
                    next('/dashboard');
                }

            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter(to,from,next){
            if(!auth.isLoggedIn()) {
                next();
            } else {
                let role = auth.getRoleUser();
                if(role === 'user'){
                    next('/dashboard');
                }else if(role === 'admin'){
                    next('/admin');
                }

            }
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});



export default router;
