<template>
    <div>
        <div class="header-wrap">
            <h1>{{'We_Replenishment' | localize}}</h1>
            <div class="vens"></div>
        </div>
        <div class="row">
            <div class="col padding">
                <div class="card horizontal evenly">
                    <div class="card-image">
                        <h2 class="center-align">  Папа <br>Шоу Галактика Винсент</h2>
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d3.jpg">
                    </div>
                    <div class="card-image">
                        <h2 class="center-align">Мама <br>Офелия Засима</h2>
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d4.jpg">
                    </div>

                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>

<p>Все наши щенки имеют  клеймо питомника " HIC "  и цифровое обозначение по порядку

    А так же, набор документов. Паспорт ветеринарный, с отметками о  вакцинациях и обработках от паразитов согласно возрасту. Метрика щенка (в дальнейшем обменивается на родословную РКФ)    Договор КУПЛИ-ПРОДАЖИ .    Чек о покупке.  </p>


                <div class="card horizontal">
                    <div class="card-image">
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d2.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h2> Шоу Галактика Жемчужный Принц</h2>

                            <ul>
                                <li><strong>кобель</strong></li>
                                <li><strong>рожден 1.10.2020 </strong></li>
                                <li><strong>разновидность   ГОЛЫЙ  ( THL).</strong></li>
                                <li><strong>вес при рождении 152 гр.</strong></li>
                                <li><strong>окрас  КРЕМОВЫЙ с БЕЛЫМ  ( ПАЛОМИНО).</strong></li>
                            </ul>
                            <div class="end">
                                <span>Получить полную информацию о  помете: <router-link to="/">"помет  Ж"</router-link>,
                                    <br>а так же  по телефону   и   ватсап  +7 906 798 64 74    alise.70@mail.ru
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="break"></div>
                <div class="header-wrap">
                    <h4 class="center-align">Планируем вязки производителей</h4>
                    <div class="vens"></div>
                </div>
                <div class="card horizontal evenly">
                    <div class="card-image">
                        <h2 class="center-align">  (Купер) <br>Поале Элл  Купер                                                      </h2>
                        <img src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/b4.jpg" alt="">
                    </div>
                </div>
                <div class="card horizontal evenly">
                    <div class="card-image">
                        <h2 class="center-align">  (Лолита) <br>Шоу Галактика Лимитед Эдишен                                                       </h2>
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d5.jpg">
                    </div>
                    <div class="card-image">
                        <h2 class="center-align">(Марго) <br>Шоу Галактика Экспенсив     Джевелри  </h2>
                        <img  src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/d6.jpg">
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>



            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Puppies",
        metaInfo() {
            return {
                title: this.$title('Menu_Root_Puppies')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
