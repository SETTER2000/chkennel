<template>
    <div id="wrapper" class="pink lighten-4 front-layout ">
        <!--        <Loader v-if="loading"/>-->
        <div class="container bg">
            <Header/>
<!--            <Menu/>-->
            <MenuNav/>


            <div class="section white">
                <div class="row">
                    <div class="col s3 "><SidebarRoot/></div>
                    <div class="col s9">
                        <div class="wrap-content">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Для связи</h5>
                            <p class="grey-text text-lighten-4">
                                <strong>Заводчик Татьяна Чистонова </strong>
                                <br>
                                <font-awesome-icon :icon="['fab', 'whatsapp']" size="1x" color="#ffffff"/>
                                +7-906-798-64-74
                                <br><i class="tiny material-icons">email</i> alise.70@mail.ru Татьяна
                                <br><i class="tiny material-icons">email</i> elizabeth.prianishnikova@gmail.com
                                Elizabeth
                                <br><i class="tiny material-icons">stay_current_portrait</i> +7-916-551-06-49 Elizabeth
                                (here we
                                can answer in English)
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Полезные ссылки</h5>
                           <MenuFooter/>
                            <div class="row">
                                <div class="col ">
                                    <div class="list ma0 pa0 flex flex-row flex-wrap teal4">
                                        <a href="http://twitter.com/share?text=%D0%9D%D0%9E%D0%92%D0%9E%D0%A1%D0%A2%D0%98&url=https%3A%2F%2Fwww.chinese-dog.ru%2F%25D0%25BD%25D0%25BE%25D0%25B2%25D0%25BE%25D1%2581%25D1%2582%25D0%25B8%2F"
                                           class="waves-effect waves-light">
                                            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" color="#f8bbd0"/>
                                        </a>
                                        <a href="http://www.facebook.com/sharer.php?u=https://www.chinese-dog.ru/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/&t=%D0%9D%D0%9E%D0%92%D0%9E%D0%A1%D0%A2%D0%98"
                                           class="waves-effect waves-light">
                                            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" color="#f8bbd0"/>
                                        </a>
                                        <a href="http://vkontakte.ru/share.php?url=https%3A%2F%2Fwww.chinese-dog.ru%2F%25D0%25BD%25D0%25BE%25D0%25B2%25D0%25BE%25D1%2581%25D1%2582%25D0%25B8%2F"
                                           class="waves-effect waves-light">
                                            <font-awesome-icon :icon="['fab', 'vk']" size="2x" color="#f8bbd0"/>
                                        </a>

                                        <a href="https://www.facebook.com/messages/t/100001728964614"
                                           class="waves-effect waves-light">
                                            <font-awesome-icon :icon="['fab', 'facebook-messenger']" size="2x"
                                                               color="#f8bbd0"/>
                                        </a>

                                        <a href="https://www.instagram.com/show_galaktika"
                                           class="waves-effect waves-light">
                                            <font-awesome-icon :icon="['fab', 'instagram-square']" size="2x"
                                                               color="#f8bbd0"/>
                                        </a>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container between">
                        <span>2020 © Copyright </span> <span>Design by <a style="color: rgba(255,255,255,0.8);" href="//lphp.ru">lphp.ru</a></span>
                        <!--                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>-->
                    </div>
                </div>
            </footer>
        </div>


    </div>

</template>


<script>
    import messages from "../utils/messages";
    import Header from "../components/app/Header";
    import Menu from "../components/app/Menu"
    import SidebarRoot from "../components/app/SidebarRoot";
    import MenuFooter from "../components/app/MenuFooter"
    import MenuNav from "../components/app/MenuNav"

    export default {
        name: "clear-layout",
        data: () => ({
            loading: true
        }),
        computed: {
            error() {
                return this.$store.getters.error
            },
            locale() {
                return this.$store.getters.info.locale
            }
        },
        watch: {
            error(fbError) {
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
            }
        },
        components: {
            Header, Menu, SidebarRoot,MenuFooter,MenuNav
        }
    }
</script>

<style scoped>

</style>

