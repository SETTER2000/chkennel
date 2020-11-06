<template>
    <div class="pink lighten-4 front-layout ">
<!--        <Loader v-if="loading"/>-->
        <div class="container bg">
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <div class="row center">
                            <h5 class="header col s12 text-lighten-3"> +7-906-798-64-74 WhatsApp Татьяна Чистонова
                                alise.70@mail.ru </h5>
                        </div>
                    </div>
                </div>
                <div class="parallax"><img
                        src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/show-galaktika-header.jpg"
                        alt="Питомник Шоу Галактика"></div>
            </div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/"><div class="logo-w"></div></a>
                    <!--                    <a href="#!" class="brand-logo"><div class="ico"></div></a>-->
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#"><i class="tiny material-icons">home</i></a></li>
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
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="#"><i class="tiny material-icons">home</i></a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Кобели</a></li>
                <li><a href="#" class="active">Суки</a></li>
                <li><a href="#">Щенки</a></li>
                <li><a href="#">Грумминг</a></li>
                <li><a href="#">Медиа</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div class="section white">
                <div class="row">
                    <div class="col ">
                        <router-view/>
                    </div>
                </div>
                <div class="row flex-center" >
                    <div class="col">
                        <div >
                            <ul class="pagination" >
                                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                <li class="waves-effect  "><a href="#!">1</a></li>
                                <li class="waves-effect"><a href="#!">2</a></li>
                                <li class="waves-effect active"><a href="#!">3</a></li>
                                <li class="waves-effect"><a href="#!">4</a></li>
                                <li class="waves-effect"><a href="#!">5</a></li>
                                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a>
                                </li>
                            </ul>
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
                                WhatsApp: +7-906-798-64-74
                                <br> Breeder: Татьяна Чистонова
                                <br><i class="tiny material-icons">email</i> alise.70@mail.ru Татьяна
                                <br><i class="tiny material-icons">email</i> elizabeth.prianishnikova@gmail.com Elizabeth
                                (English)
                                <br><i class="tiny material-icons">stay_current_portrait</i> +7-916-551-06-49 Elizabeth (here we
                                can answer in English)
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul style="line-height:2rem;">
                                <li><a class="grey-text text-lighten-3" href="#!">Чипы</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Здоровье</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Питание</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Владельцам</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Архив</a></li>
                            </ul>
                            <div class="row">
                                <div class="col">
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
                    <div class="container">
                        Show Galaktika Kennel © 2020 Copyright
                        <!--                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>-->
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>


<script>
    import messages from "../utils/messages";
    export default {
        name: "clear-layout",
        data: () => ({
             loading: true
         }),
        /*   computed:{
               error(){
                   return this.$store.getters.error
               }
           },*/
        computed:{
            error(){
                return this.$store.getters.error
            },
            locale(){
                return this.$store.getters.info.locale
            }
        },
        watch:{
            error(fbError){
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
            }
        }
    }
</script>

<style scoped>

</style>

