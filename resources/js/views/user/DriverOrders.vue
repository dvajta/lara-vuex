<template>
    <main>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <td>#</td>
                    <td>ID</td>
                    <td>Имя получателя</td>
                    <td>Телефон получателя</td>
                    <td>Адрес получателя</td>
                    <td>Статус</td>
                    <td>Время создания</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(order,index) in orders" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ order.id }}</td>
                    <td>{{ order.end_user_name }}</td>
                    <td>{{ order.end_user_phone }}</td>
                    <td>{{ order.end_address }}</td>
                    <td>{{ order.status_id }}</td>
                    <td>{{ order.time_creation }}</td>
                    <td>
                        <button class="btn btn-success btn-sm" @click="viewOrder(order)"><span class="far fa-eye"></span></button>
                        <button v-if="order.status_id !== 5" :class="agreeButtonClass(order.status_id)"  class="btn btn-sm"  @click="agreeOrder(order)">{{agreeButtonName(order.status_id)}}</button>
                        <button v-if="order.status_id === 2 || order.status_id === 3" class="btn btn-sm" :class="completedButtonClass(order.status_id)"  @click="completedOrder(order)">{{completedButtonName(order.status_id)}}</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center" v-show="moreExists">
                <button class="btn btn-primary btn-sm" @click="loadMore"><span class="fas fa-arrow-down"></span> Загрузить больше</button>
            </div>
        </div>
        <b-modal ref="viewOrderModal" hide-footer :title="`Подробно о заказе № ${viewOrderData.id}`">
            <div class="d-block">
                <form>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <input type="text" :disabled="true" v-model="viewOrderData.end_user_name" class="form-control" id="name" name="name" placeholder="Имя того, кто получает груз">
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" :disabled="true" v-model="viewOrderData.end_user_phone" class="form-control" id="phone" name="phone" placeholder="Телефон того, кто получает груз">
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" :disabled="true" v-model="viewOrderData.start_address" class="form-control" id="startAddress" name="startAddress" placeholder="Адрес откуда забирать груз">
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" :disabled="true" v-model="viewOrderData.end_address" class="form-control" id="endAddress" name="endAddress" placeholder="Адрес куда доставить груз">
                        </div>
                        <div class="col-12 mb-3">
                            <select class="form-select" :disabled="true" v-model="viewOrderData.type_pack" id="typePack" name="typePack">
                                <option selected>Выберите вид упаковки</option>
                                <option value="1">конверт/ящик до 5кг</option>
                                <option value="2">ящик 5 - 15 кг</option>
                                <option value="3">ящик 16 - 23 кг</option>
                            </select>
                        </div>
                        <div class="col-12 mb-3">
                            <select class="form-select" :disabled="true" v-model="viewOrderData.classification_id" id="classification" name="classification">
                                <option selected>Выберите классификацию</option>
                                <option value="1">Обычный</option>
                                <option value="2">Хрупкий</option>
                                <option value="3">Взрывоопасный</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <textarea class="form-control" :disabled="true" id="note" name="note" v-model="viewOrderData.note"></textarea>
                        </div>
                    </div>
                    <hr>
                    <button type="button" class="btn btn-default" @click="hideViewModal">Выйти</button>

                </form>
            </div>
        </b-modal>
    </main>
</template>

<script>
    import * as driverOrderService from '../../services/driver_order_service';
    export default {
        name: "DriverOrders",
            data() {
                return {
                    message: '',
                    driver_id: '',
                    orders: [],
                    moreExists: false,
                    nextPage: 0,
                    viewOrderData: {},
                    errors: {}
                }
            },
        mounted(){
            this.driver_id = this.$store.state.profile.id;
            this.loadOrders()
        },
        methods: {
            loadOrders: async function () {
                try {
                    const response = await driverOrderService.loadOrders();
                    this.orders = response.data.data;

                    if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1
                    } else {
                        this.moreExists = false;
                    }
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Возникла ошибка при получении всех записей!',
                        time: 5000
                    });
                }
            },
            agreeButtonClass(status){
                if(status === 2){
                    return 'btn-danger';
                }else if(status === 1){
                    return 'btn-success';
                }else if(status === 4){
                    return 'btn-info';
                }
            },
            agreeButtonName(status){
                if(status === 2){
                    return 'Отменить';
                }else if(status === 1){
                    return 'Принять';
                }else if(status === 4){
                    return 'Возобновить'
                }
            },
            completedButtonName(status){
                if(status === 2){
                    return 'Выполнил';
                }else if(status === 3){
                    return 'Завершено';
                }
            },
            completedButtonClass(status){
                if(status === 3){
                    return 'btn-secondary';
                }else if(status !== 3){
                    return 'btn-warning';
                }
            },
            loadMore: async function(){
                try{
                    let response = await driverOrderService.loadMore(this.nextPage);
                    if(response.data.current_page < response.data.last_page){
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1
                    }else{
                        this.moreExists = false;
                    }
                    response.data.data.forEach(data => {
                        this.orders.push(data);
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: 'При загрузке дополнительных заказов произошла ошибка ',
                        time: 5000
                    });
                }
            },
            viewOrder(order){
                this.viewOrderData = {...order};
                this.showViewModal();
            },
            viewOrder(order){
                this.viewOrderData = {...order};
                this.showViewModal();
            },
            showViewModal() {
                this.$refs['viewOrderModal'].show()
            },
            hideViewModal(){
                this.$refs['viewOrderModal'].hide()
                this.orderData.name = ''
            },
            completedOrder: async function(order){
                if(!window.confirm(`Вы уверены что доставили заказ № ${order.id}`)){
                    return;
                }
                try{

                    const response = await driverOrderService.updateStatusOrder(order.id, this.driver_id, 3);

                    this.orders.map(order => {
                        if(order.id === response.data.id){

                            for(let key in response.data){
                                order[key] = response.data[key];
                            }
                        }
                    });
                    //this.hideEditModal();

                    this.flashMessage.success({
                        message: 'Заказ выполнен',
                        time: 5000
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
            agreeOrder: async function(order){
                try{

                    const response = await driverOrderService.updateStatusOrder(order.id, this.driver_id);

                    this.orders.map(order => {
                        if(order.id === response.data.id){

                            for(let key in response.data){
                                order[key] = response.data[key];
                            }
                        }
                    });
                    //this.hideEditModal();
                    if(response.data.status_id === 2){
                        this.message = 'Заказ принят!';
                    }else if(response.data.status_id === 4){
                        this.message = 'Заказ отменён!';
                    }

                    this.flashMessage.success({
                        message: this.message,
                        time: 5000
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            }
        }

    }
</script>

<style scoped>

</style>
