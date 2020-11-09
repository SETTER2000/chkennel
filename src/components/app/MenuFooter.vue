<template>
    <ul style="line-height:2rem;">
        <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                class="nav-item flex-item"
                :to="link.url"
                :exact="link.exact"
        ><a href="#"  class="grey-text text-lighten-3"> {{link.title}}</a></router-link>
    </ul>

</template>

<script>
    import localizeFilter from "../../filters/localize.filter";

    export default {
        name: "MenuFooter",
        data: () => ({
            links: [
                {title: localizeFilter('Menu_Footer_Chips'), url: '/чипы',exact:true},
                {title: localizeFilter('Menu_Footer_Health'), url: '/здоровье'},
                {title: localizeFilter('Menu_Footer_Food'), url: '/питание'},
                {title: localizeFilter('Menu_Footer_Owners'), url: '/будущим-владельцам'},
                {title: localizeFilter('Menu_Footer_Array'), url: '/архив'},

            ]
        })
    }
</script>

<style scoped>

</style>
