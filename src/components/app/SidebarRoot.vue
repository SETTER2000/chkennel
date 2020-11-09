<template>
    <div id="nav-top" class="sidebar-root">
        <h5>Каталог</h5>
        <div class="menu">

            <ul class="nav ">
                <router-link
                        v-for="link in links"
                        :key="link.url"
                        tag="li"
                        class="nav-item flex-item"
                        active-class="active"
                        :to="link.url"
                        :exact="link.exact"
                ><a href="#" class="waves-effect pointer nav-link active">{{link.title}}</a></router-link>

            </ul>
        </div>
    </div>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";
    import MenuFooter from "./MenuFooter.vue"

    export default {
        name: "SidebarRoot",
        data: () => ({
            links: [
                {title: localizeFilter('Menu_Root_Home'), url: '/',exact:true},
                {title: localizeFilter('Menu_Root_News'), url: '/новости'},
                {title: localizeFilter('Menu_Root_Males'), url: '/кобели'},
                {title: localizeFilter('Menu_Root_Dams'), url: '/суки'},
                {title: localizeFilter('Menu_Root_Puppies'), url: '/щенки'},
                {title: localizeFilter('Menu_Root_Grooming'), url: '/ухаживаем-дома'},
                {title: localizeFilter('Menu_Root_Media'), url: '/media'},
                {title: localizeFilter('Menu_Root_Services'), url: '/услуги'},
                {title: localizeFilter('Menu_Root_Contacts'), url: '/контакты'}
          /*      {title: localizeFilter('Menu_Footer_Chips'), url: '/чипы'},
                {title: localizeFilter('Menu_Footer_Health'), url: '/здоровье'},
                {title: localizeFilter('Menu_Footer_Food'), url: '/питание'},
                {title: localizeFilter('Menu_Footer_Owners'), url: '/владельцам'},
                {title: localizeFilter('Menu_Footer_Array'), url: '/архив'},*/
            ]
        }),
        components:{
            MenuFooter
        }
    }
</script>

<style scoped>
    .sidebar-root {
        padding: 2rem;
        min-height: 100vh;
        border-right: .1em solid #e2e2e287;
    }
    .nav-fixed .menu {
        position: fixed;
        top:0;
    }
    h5 {
        color: #c3799f;
        border-bottom: 1px solid #020202;
        padding-bottom: 12px;
    }
    .flex-item {
        color: #c3799f;
        line-height: 40px;
        font-size: 1.1em;
    }
</style>
