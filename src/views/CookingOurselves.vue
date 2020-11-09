<template>
    <div class="header-wrap">
        <h1>{{'Menu_Footer_Cooking' | localize}}</h1>
        <div class="vens"></div>
    </div>
</template>

<script>
    export default {
        name: "CookingOurselves",
        metaInfo() {
            return {
                title: this.$title('Menu_Footer_Chips')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
