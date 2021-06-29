<template>
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/dashboard" class="nav-link">Главная</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/dashboard/info" class="nav-link">Профиль</router-link>
                            </li>
                            <li class="nav-item" v-if="$store.state.profile.role === 'user'">
                                <router-link to="/dashboard/orders" class="nav-link">Мои заказы</router-link>
                            </li>
                            <li class="nav-item" v-if="$store.state.profile.role === 'driver'">
                                <router-link to="driver-orders" class="nav-link">Список заявок</router-link>
                            </li>
                            <li class="nav-item" v-if="$store.state.profile.role === 'user'">
                                <router-link to="/dashboard/add-order" class="nav-link">Создать заказ</router-link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <button class="dropdown-item" @click="logout">Выйти</button>
                        </span>
                    </div>
                </div>
            </nav>
    </div>
</template>

<script>
    import * as auth from '../../services/auth_service';
    export default {
        name: "Header",
        created() {
            document.querySelector('body').style.backgroundColor = '#fff';
        },
        methods: {
            logout: async function(){
                auth.logout();
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>
