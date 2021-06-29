import {http, httpFile} from "./http_service";

export function add(order){
    return http().post('/user/store', order);
}

export function loadOrders(userId){
    return http().post('user/load-orders/', {user_id:userId});
}

export function deleteOrder(id){
    return http().delete(`user/delete-order/${id}`);
}

export function updateOrder(id, data){
    return http().post(`user/update-order/${id}`, data);
}

export function loadMore(userId, nextPage){
    return http().post(`user/orders-more?page=${nextPage}`, {user_id:userId});
}
