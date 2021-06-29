<template>
    <div>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Signup</router-link>
    </div>
</template>

<script>
    export default {
        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        }
    }
</script>

<style scoped>

</style>
