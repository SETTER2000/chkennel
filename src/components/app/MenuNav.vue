<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router="true"
            @select="handleSelect"
            background-color="#ee6e73"
            text-color="#ebe1e1"
            active-text-color="#ffd04b">
        <el-menu-item  v-for="link in links" :index="link.url">{{link.title}}</el-menu-item>
        <el-submenu index="/будущим-владельцам">
            <template slot="title" >Важно!</template>
            <el-menu-item index="/будущим-владельцам">Будущим владельцам</el-menu-item>
            <el-menu-item index="/готовим-сами">Готовим сами</el-menu-item>
            <el-menu-item index="/питание">Питание</el-menu-item>
        </el-submenu>
    <!--    <el-submenu index="/будущим-владельцам">
            <template slot="title" index="/будущим-владельцам">Щенки</template>
            <el-menu-item index="/будущим-владельцам">Владельцам</el-menu-item>
        </el-submenu>-->

    </el-menu>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";

    export default {
        name: "MenuNav",
        data() {
            return {
                activeIndex: '/',
                links: [
                    {title: localizeFilter('Menu_Root_Home'), url: '/',exact:true},
                    {title: localizeFilter('Menu_Root_News'), url: '/новости'},
                    {title: localizeFilter('Menu_Root_Males'), url: '/кобели'},
                    {title: localizeFilter('Menu_Root_Dams'), url: '/суки'},
                    {title: localizeFilter('Menu_Root_Puppies'), url: '/щенки'},
                    {title: localizeFilter('Menu_Root_Grooming'), url: '/ухаживаем-дома'},
                    {title: localizeFilter('Menu_Root_Media'), url: '/media'},
                    {title: localizeFilter('Menu_Root_Services'), url: '/услуги'},
                    {title: localizeFilter('Menu_Root_Contacts'), url: '/контакты'},
                    {title: localizeFilter('Menu_Footer_Chips'), url: '/чипы'},
                    {title: localizeFilter('Menu_Footer_Health'), url: '/здоровье'},
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>
