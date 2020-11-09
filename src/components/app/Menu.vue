<template>
    <div>
    <nav>
        <div class="nav-wrapper">
<!--            <router-link to="/"><div class="logo-w"></div></router-link>-->
            <!--                    <a href="#!" class="brand-logo"><div class="ico"></div></a>-->
            <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <router-link
                        v-for="link in links"
                        :key="link.url"
                        tag="li"
                        active-class="active"
                        :to="link.url"
                        :exact="link.exact"
                ><a href="#" class="waves-effect waves-red pointer menu-item">{{link.title}}</a></router-link>
            </ul>
        </div>
    </nav>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="/"><i class="tiny material-icons">home</i></a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Кобели</a></li>
            <li><a href="#" class="active">Суки</a></li>
            <li><a href="#">Щенки</a></li>
            <li><a href="#">Грумминг</a></li>
            <li><a href="#">Медиа</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </div>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";

    export default {
        name: "Menu",
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
            ]
        })
    }
</script>

<style scoped>
    .menu-item{
        color:  #ebe1e1;
    }

</style>
