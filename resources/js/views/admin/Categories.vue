<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item" >Categories</li>
            </ol>

            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header d-flex">
                            <span>
                            <i class="fas fa-chart-area me-1"></i>
                            Categories Management
                            </span>
                            <b-button id="show-btn" class="btn btn-primary btn-sm ml-auto" @click="showModal"><span class="fas fa-plus"></span> Create New</b-button>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Image</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category,index) in categories" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ category.id }}</td>
                                        <td>{{ category.title }}</td>
                                        <td>
                                            <img :src="`${$store.state.serverPath}/storage/${category.image}`" class="table-image">
                                        </td>
                                        <td>
                                            <button class="btn btn-success btn-sm" @click="editCategory(category)"><span class="fa fa-edit"></span></button>
                                            <button class="btn btn-danger btn-sm" @click="deleteCategory(category)"><span class="fa fa-trash"></span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-center" v-show="moreExists">
                                <button class="btn btn-primary btn-sm" @click="loadMore"><span class="fas fa-arrow-down"></span> Load More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal ref="newCategoryModal" hide-footer title="Using Component Methods">
            <div class="d-block">
                <form @submit.prevent="createCategory">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="categoryData.title">
                        <div class="error-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <div v-if="categoryData.image.name">
                            <img src="" ref="newCategoryImageDisplay" class="w-100" >
                        </div>
                        <input type="file" @change="attachImage" ref="newCategoryImage" class="form-control" id="image" >
                        <div class="error-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>
                    <hr>
                    <button type="button" class="btn btn-default" @click="hideModal">Cancel</button>
                    <button type="submit" class="btn btn-primary" ><span class="fas fa-check"></span>Save</button>

                </form>
            </div>
        </b-modal>
        <b-modal ref="editCategoryModal" hide-footer :title="`Обновить категорию ${editCategoryData.title}`">
            <div class="d-block">
                <form @submit.prevent="updateCategory">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="editCategoryData.title">
                        <div class="error-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editCategoryImageDisplay" class="w-100" >
                        </div>
                        <input type="file" @change="editAttachImage" ref="editCategoryImage" class="form-control" id="image" >
                        <div class="error-feedback" v-if="errors.image">{{errors.image[0]}}</div>
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
    import * as categoryService from '../../services/category_service';

    export default {
        name: "Categories",
        data() {
            return {
                categories: [],
                categoryData: {
                    title: '',
                    image: '',
                },
                moreExists: false,
                nextPage: 0,
                editCategoryData: {},
                errors: {}
            }
        },
        mounted(){
            this.loadCategories()
        },
        methods: {
            loadCategories: async function(){
                try{
                    const response = await categoryService.loadCategories();
                    this.categories = response.data.data;

                    if(response.data.current_page < response.data.last_page){
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1
                    }else{
                        this.moreExists = false;
                    }
                }catch(error){
                    this.flashMessage.error({
                        message: 'Возникла ошибка при получении всех записей!',
                        time: 5000
                    });
                }
            },
            attachImage(){
                this.categoryData.image = this.$refs['newCategoryImage'].files[0];
                let reader = new FileReader();

                reader.addEventListener('load', function(){
                    this.$refs['newCategoryImageDisplay'].src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.categoryData.image);
            },
            showModal() {
                this.$refs['newCategoryModal'].show()
            },
            hideModal() {
                this.$refs['newCategoryModal'].hide()
                this.categoryData.title = ''
                this.categoryData.image = ''
            },
            createCategory: async function(){
                let formData = new FormData();
                formData.append('title', this.categoryData.title);
                formData.append('image', this.categoryData.image);

                try {
                    const response = await categoryService.createCategory(formData);
                    this.hideModal()
                    this.flashMessage.success({
                        message: 'Категория успешно добавлена!',
                        time: 5000
                    });
                    this.categories.unshift(response.data);
                    this.categoryData = {
                      title: '',
                      image: ''
                    }
                }catch(error){
                    switch (error.response.status) {
                         case 422:
                             this.errors = error.response.data.errors
                             break;

                         default:
                             this.flashMessage.error({
                                 message: 'Ошибка добавления категории!',
                                 time: 5000
                             });
                             break;
                     }
                }

            },
            deleteCategory: async function(category){
                if(!window.confirm(`Are you sure you want to delete ${category.title}`)){
                    return;
                }

                try{
                    const response = await categoryService.deleteCategory(category.id)

                    this.categories = this.categories.filter(obj => {
                        return obj.id !== category.id
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
            hideEditModal(){
                this.$refs['editCategoryModal'].hide()
                this.categoryData.title = ''
                this.categoryData.image = ''
            },
            showEditModal() {
                this.$refs['editCategoryModal'].show()
            },
            editCategory(category){
                this.editCategoryData = {...category};
                this.showEditModal();
            },
            editAttachImage(){
                this.editCategoryData.image = this.$refs['editCategoryImage'].files[0];
                let reader = new FileReader();

                reader.addEventListener('load', function(){
                    this.$refs['editCategoryImageDisplay'].src = reader.result;
                }.bind(this), false);

                reader.readAsDataURL(this.editCategoryData.image);
            },
            updateCategory: async function(){
               try{
                    const formData = new FormData();
                    formData.append('title', this.editCategoryData.title);
                    formData.append('image', this.editCategoryData.image);
                    formData.append('_method', 'put');

                    const response = await categoryService.updateCategory(this.editCategoryData.id, formData);
                    this.categories.map(category => {
                    if(category.id === response.data.id){

                        for(let key in response.data){
                            category[key] = response.data[key];
                        }
                    }
                    })
                    this.hideEditModal();
                    this.flashMessage.success({
                       message: 'Категория успешно обновлена!',
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
                    let response = await categoryService.loadMore(this.nextPage);
                    if(response.data.current_page < response.data.last_page){
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1
                    }else{
                        this.moreExists = false;
                    }
                    response.data.data.forEach(data => {
                        this.categories.push(data);
                    });
                }catch(error){
                    this.flashMessage.error({
                        message: 'Some error occurred during loading more categories',
                        time: 5000
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
