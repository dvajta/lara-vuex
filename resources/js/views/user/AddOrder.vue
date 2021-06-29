<template>
    <div class="container">
        <form @submit.prevent="addOrder">
            <div class="row text-center mb-3">
                <h3>Новый заказ доставки груза</h3>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" v-model="order.name" class="form-control" id="name" name="name" placeholder="Имя того, кто получает груз">
                </div>
                <div class="col">
                    <input type="text" v-model="order.phone" class="form-control" id="phone" name="phone" placeholder="Телефон того, кто получает груз">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <input type="text" v-model="order.startAddress" class="form-control" id="startAddress" name="startAddress" placeholder="Адрес откуда забирать груз">
                </div>
                <div class="col">
                    <input type="text" v-model="order.endAddress" class="form-control" id="endAddress" name="endAddress" placeholder="Адрес куда доставить груз">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <select class="form-select" v-model="order.typePack" id="typePack" name="typePack">
                        <option selected>Выберите вид упаковки</option>
                        <option value="1">конверт/ящик до 5кг</option>
                        <option value="2">ящик 5 - 15 кг</option>
                        <option value="3">ящик 16 - 23 кг</option>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" v-model="order.classification" id="classification" name="classification">
                        <option selected>Выберите классификацию</option>
                        <option value="1">Обычный</option>
                        <option value="2">Хрупкий</option>
                        <option value="3">Взрывоопасный</option>
                    </select>
                </div>
            </div>
            <div class="row mt-3 mb-3">
                <div class="input-group">
                    <textarea class="form-control" id="note" name="note" v-model="order.note"></textarea>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Создать</button>
        </form>
    </div>
</template>

<script>
    import * as order from '../../services/order_service';

    export default {
        name: "AddOrder",
        created() {
            document.querySelector('body').style.backgroundColor = '#fff';
        },
        data(){
            return {
                order: {
                    user_id: this.$store.state.profile.id,
                    name: '',
                    phone: '',
                    startAddress: '',
                    endAddress: '',
                    typePack: 'Выберите вид упаковки',
                    classification: 'Выберите классификацию',
                    note: ''
                },
                errors: {}
            }
        },
        methods: {
            addOrder: async function(){
                try{
                    let response = await order.add(this.order);
                    this.errors = {};
                    this.$router.push('/dashboard/orders');
                }catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;

                        default:
                            this.flashMessage.error({
                                message: 'Ошибка добавления!',
                                time: 5000
                            });
                            break;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
