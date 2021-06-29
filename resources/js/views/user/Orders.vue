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
                        <button class="btn btn-success btn-sm" @click="editOrder(order)"><span class="fa fa-edit"></span></button>
                        <button class="btn btn-danger btn-sm" @click="deleteOrder(order)"><span class="fa fa-trash"></span></button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center" v-show="moreExists">
                <button class="btn btn-primary btn-sm" @click="loadMore"><span class="fas fa-arrow-down"></span> Загрузить больше</button>
            </div>
        </div>
        <b-modal ref="editOrderModal" hide-footer :title="`Обновить заказ № ${editOrderData.id}`">
            <div class="d-block">
                <form @submit.prevent="updateOrder">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <input type="text" v-model="editOrderData.end_user_name" class="form-control" id="name" name="name" placeholder="Имя того, кто получает груз">
                            <div class="error-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" v-model="editOrderData.end_user_phone" class="form-control" id="phone" name="phone" placeholder="Телефон того, кто получает груз">
                            <div class="error-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" v-model="editOrderData.start_address" class="form-control" id="startAddress" name="startAddress" placeholder="Адрес откуда забирать груз">
                            <div class="error-feedback" v-if="errors.startAddress">{{errors.startAddress[0]}}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" v-model="editOrderData.end_address" class="form-control" id="endAddress" name="endAddress" placeholder="Адрес куда доставить груз">
                            <div class="error-feedback" v-if="errors.endAddress">{{errors.endAddress[0]}}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <select class="form-select" v-model="editOrderData.type_pack" id="typePack" name="typePack">
                                <option selected>Выберите вид упаковки</option>
                                <option value="1">конверт/ящик до 5кг</option>
                                <option value="2">ящик 5 - 15 кг</option>
                                <option value="3">ящик 16 - 23 кг</option>
                            </select>
                            <div class="error-feedback" v-if="errors.typePack">{{errors.typePack[0]}}</div>
                        </div>
                        <div class="col-12 mb-3">
                            <select class="form-select" v-model="editOrderData.classification_id" id="classification" name="classification">
                                <option selected>Выберите классификацию</option>
                                <option value="1">Обычный</option>
                                <option value="2">Хрупкий</option>
                                <option value="3">Взрывоопасный</option>
                            </select>
                            <div class="error-feedback" v-if="errors.classification">{{errors.classification[0]}}</div>
                        </div>
                        <div class="input-group">
                            <textarea class="form-control" id="note" name="note" v-model="editOrderData.note"></textarea>
                            <div class="error-feedback" v-if="errors.note">{{errors.note[0]}}</div>
                        </div>
                    </div>
                    <hr>
                    <button type="button" class="btn btn-default" @click="hideEditModal">Выйти</button>
                    <button type="submit" class="btn btn-primary" ><span class="fas fa-check"></span>Обновить</button>

                </form>
            </div>
        </b-modal>
    </main>
</template>

<script>
    import * as orderService from '../../services/order_service';
    export default {
        name: "Order",
        data() {
            return {
                user_id: '',
                orders: [],
                orderData: {
                    name: '',
                    phone: '',
                },
                moreExists: false,
                nextPage: 0,
                editOrderData: {},
                errors: {}
            }
        },
        mounted(){
            this.user_id = this.$store.state.profile.id;
            this.loadOrders()
        },
        methods: {
            loadOrders: async function () {
                try {
                    const response = await orderService.loadOrders(this.user_id);

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
            editOrder(order){
                this.editOrderData = {...order};
                this.showEditModal();
            },
            showEditModal() {
                this.$refs['editOrderModal'].show()
            },
            hideEditModal(){
                this.$refs['editOrderModal'].hide()
                this.orderData.name = ''
            },
            deleteOrder: async function(order){
                if(!window.confirm(`Вы уверены что хотите удалить заказ № ${order.id}`)){
                    return;
                }

                try{
                    const response = await orderService.deleteOrder(order.id)

                    this.orders = this.orders.filter(obj => {
                        return obj.id !== order.id
                    });

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
            loadMore: async function(){
                try{
                    let response = await orderService.loadMore(this.user_id, this.nextPage);
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
                        message: 'Some error occurred during loading more categories',
                        time: 5000
                    });
                }
            },
            updateOrder: async function(){
                try{
                    const formData = new FormData();
                    formData.append('name', this.editOrderData.end_user_name);
                    formData.append('phone', this.editOrderData.end_user_phone);
                    formData.append('startAddress', this.editOrderData.start_address);
                    formData.append('endAddress', this.editOrderData.end_address);
                    formData.append('typePack', this.editOrderData.type_pack);
                    formData.append('classification', this.editOrderData.classification_id);
                    formData.append('note', this.editOrderData.note);

                    formData.append('_method', 'put');

                    const response = await orderService.updateOrder(this.editOrderData.id, formData);

                    this.orders.map(order => {
                        if(order.id === response.data.id){

                            for(let key in response.data){
                                order[key] = response.data[key];
                            }
                        }
                    })
                    this.hideEditModal();
                    this.flashMessage.success({
                        message: 'Заказ успешно обновлен!',
                        time: 5000
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>
