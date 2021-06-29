<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Регистрация пользователя</h3></div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-md-0">
                                        <input
                                            class="form-control"
                                            v-model="user.name"
                                            id="name"
                                            type="text"
                                            placeholder="Введите ваше имя"

                                        />
                                        <label for="name">Имя</label>
                                        <div class="error-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input
                                            class="form-control"
                                            v-model="user.surname"
                                            id="surname"
                                            type="text"
                                            placeholder="Введите фамилию"

                                        />
                                        <label for="surname">Фамилия</label>
                                        <div class="error-feedback" v-if="errors.surname">{{errors.surname[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    v-model="user.email"
                                    id="email" type="email"
                                    placeholder="name@example.com"

                                />
                                <label for="email">Email адрес</label>
                                <div class="error-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-md-0">
                                        <input
                                            class="form-control"
                                            v-model="user.password"
                                            id="password"
                                            type="password"
                                            placeholder="Создайте пароль"

                                        />
                                        <label for="password">Пароль</label>
                                        <div class="error-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-md-0">
                                        <input
                                            class="form-control"
                                            v-model="user.password_confirmation"
                                            id="password_confirmation"
                                            type="password"
                                            placeholder="Повтор пароля"

                                        />
                                        <label for="password_confirmation">Повтор пароля</label>
                                        <div class="error-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 mb-0">
                                <div class="d-grid"><button type="submit" class="btn btn-primary btn-block">Зарегистрироваться</button></div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center py-3">
                        <router-link class="small" to="/login">Уже есть аккаунт? Войдите</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as auth from '../../services/auth_service';
    export default {
        name: 'Register',
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },
        data(){
            return {
                user: {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {}
            }
        },
        methods: {
            register: async function() {
                try{
                    await auth.register(this.user);
                    this.errors = {};
                    this.$router.push('/login');
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
                                message: 'Ошибка регистрации!',
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
