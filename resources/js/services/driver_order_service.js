import {http, httpFile} from "./http_service";

export function loadOrders(){
    return http().get('user/driver-orders');
}

export function loadMore(nextPage){
    return http().get(`user/driver-orders-more?page=${nextPage}`);
}

export function updateStatusOrder(id, driverId, otherStatus = false){
    return http().post(`user/update-status-order/${id}`, {driver_id:driverId, other_status:otherStatus});
}
