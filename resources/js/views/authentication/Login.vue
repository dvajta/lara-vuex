<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    v-model="user.email"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label for="email">Email адрес</label>
                                <div class="error-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    class="form-control"
                                    v-model="user.password"
                                    id="password"
                                    type="password"
                                    placeholder="Пароль"
                                />
                                <label for="password">Password</label>
                                <div class="error-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>
                            <div class="form-check mb-3">
                                <input
                                    class="form-check-input"
                                    v-model="user.remember_me"
                                    id="inputRememberPassword"
                                    type="checkbox"
                                    value=""
                                />
                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <router-link class="small" to="/reset-password">Forgot Password?</router-link>
                                <button type="submit" class="btn btn-primary">Войти</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center py-3">
                        <router-link class="small" to="/register">Need an account? Sign up!</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as auth from '../../services/auth_service';
    export default {
        name: 'Login',
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },
        data(){
            return {
                user: {
                    email: '',
                    password: '',
                    remember_me: false
                },
                errors:{}
            }
        },
        methods:{
            login: async function(){
               try{
                   const response = await auth.login(this.user);

                    this.errors = {};
                    if(response.user.role === 'admin'){
                        this.$router.push('/admin');
                    }else if(response.user.role === 'user'){
                        this.$router.push('/dashboard');
                    }else if(response.user.role === 'driver'){
                        this.$router.push('/dashboard');
                    }


               } catch (error) {
                   switch (error.response.status) {
                       case 422:
                           this.errors = error.response.data.errors
                           break;
                       case 401:
                           this.flashMessage.error({
                               message: error.response.data.message,
                               time: 5000
                           });
                           break;
                       case 500:
                           this.flashMessage.error({
                               message: error.response.data.message,
                               time: 5000
                           });
                           break;

                       default:
                           this.flashMessage.error({
                               message: 'Ошибка авторизации!',
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
