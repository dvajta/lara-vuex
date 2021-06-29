<template>
    <div>
        <Header />
        <div id="panel_content" class="pt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/user-panel/Header';
    export default {
        name: "Index",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>
