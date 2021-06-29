<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>Личная информация:</h3>
                <p>Имя: {{$store.state.profile.name}}</p>
                <p>Фамилия: {{$store.state.profile.surname}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        created() {
            document.querySelector('body').style.backgroundColor = '#fff';
        },
    }
</script>

<style scoped>

</style>
