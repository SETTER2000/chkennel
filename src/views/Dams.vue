<template>
    <div>
        <div class="header-wrap-2">
            <h1 class="left-align">{{'Our_Chinese' | localize}}</h1>
            <p>(чтобы посмотреть персональную страницу собаки - нажмите на кличку)</p>
        </div>


        <div class="header-wrap">
            <div class="vens"></div>
        </div>
        <div class="row">
            <div class="col padding">
                <div class="card horizontal">
                    <div class="card-image">
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d1.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h2>Мано Понис Фейерверкас "Оскар"</h2>
                            <strong>Мама и бабушка многих чемпионов нашего питомника</strong>
                            <ul>
                                <li><strong> #1 ТОП Производитель Сука 2014  НКП "Китайская Хохлатая"</strong></li>
                                <li><strong> Интерчемпион</strong></li>
                                <li><strong> Лучшая сука Чемпион Породы НА выставке   ЗОЛОТОЙ ОШЕЙНИК   2014</strong></li>
                                <li><strong> Чемпион Балканских стран</strong></li>
                                <li><strong> Чемпион Клуба, Чемпион РКФ</strong></li>
                                <li><strong> Гранд Чемпион России, Гранд Чемпион Сербии, Гранд Чемпион Румынии</strong></li>
                                <li><strong> Гранд Чемпион Болгарии</strong></li>
                                <li><strong> Чемпион России, Чемпион Беларуси, Чемпион Румынии, Чемпион Сербии, Чемпион Молдавии</strong></li>
                                <li><strong> Чемпион Черногории, Чемпион Болгарии</strong></li>
                                <li><strong> Юный Чемпион России</strong></li>
                                <li><strong> Сертификат PLL-clear, Сертификат PRA-clear</strong></li>
                                <li><strong> рост 30 см</strong></li>
                            </ul>
                            <div class="end">
                                <span>вл. Татьяна Чистонова Моск обл.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>















                <div class="card horizontal">
                    <div class="card-image">
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d2.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h2>Ланарт Кампари Ксоло Клуб "Кампари"</h2>
                            <ul>
                                <li><strong>Юный Чемпион Мира</strong></li>
                                <li><strong>Чемпион России, Чемпион РКФ</strong></li>
                                <li><strong>Чемпион Беларуси</strong></li>
                                <li><strong>Юный Чемпион России</strong></li>
                                <li><strong>Сертификат PLL-clear</strong></li>
                                <li><strong>Сертификат PRA-clear</strong></li>
                                <li><strong>Сертификат Patella 0\0 (идеальные коленные суставы).</strong></li>
                                <li><strong>Сертификат РКФ HD-A, ED-0 (идеальные суставы)</strong></li>
                                <li><strong>рост 32,5 см</strong></li>
                            </ul>
                            <div class="end">
                                <span>вл. Татьяна Чистонова Моск обл.</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>









                <div class="card horizontal">
                    <div class="card-image">
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d3.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h2>Шоу Галактика  Винсент "Винт"</h2>
                            <ul>
                                <li><strong>ЮНЫЙ ЧЕМПИОН НАЦИОНАЛЬНОГО КЛУБА 2018</strong></li>
                                <li><strong>Лучшая сука юниор национального клуба 2018</strong></li>
                                <li><strong>Призер Национального Чемпиона 2017</strong></li>
                                <li><strong>Лучший ЮНИОР  Китайской хохлатой Международной выставки РОССИЯ 2017</strong></li>
                                <li><strong>Юный Чемпион России</strong></li>
                                <li><strong>PRA-clear,PLL-clear по рождени</strong></li>
                                <li><strong>Чемпион Беларуси</strong></li>
                                <li><strong>Победитель Беларуси 2018</strong></li>
                                <li><strong>рост 29 см.</strong></li>
                            </ul>
                            <div class="end">
                                <span>вл. Татьяна Чистонова Моск обл.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>



            </div>
        </div>
        <div class="row flex-center">
            <div class="col">
                <div>
                    <ul class="pagination">
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
</template>

<script>
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'
    export default {
        name: "Dams",
        metaInfo() {
            return {
                title: this.$title('Menu_Root_Dams')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
