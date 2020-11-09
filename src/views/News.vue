<template>
    <div>
        <div class="header-wrap">
            <div class="vens"></div>
            <h1>{{'News_Kennel' | localize}}</h1>
            <div class="vens"></div>
        </div>
        <div class="row">
            <div class="col padding">
                <div class="card horizontal scrollspy">
                    <div class="card-image">
                        <img src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/tat.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <!--<div class="title-news">
                                <div class="title-news-data">
                                    <div><i class="small material-icons">event</i></div>
                                    <div style="">05.09 2020</div>
                                </div>
                                <a class="btn-floating btn-large waves-effect waves-light grey lighten-1 btn-small">
                                    <i class="material-icons">settings</i>
                                </a>
                            </div>-->
                            <h2>РОО ОЛЖ КОРАЛ 1 РОО ОЛЖ КОРАЛ 2 МКОО АНТАРЕС</h2>
                            <p>Шоу Галактика Гриффиндор Дебют в классе щенков .

                                Победитель класса. Лучший пуховый щенок.

                                Лучший щенок монопородной выставки. БИС.

                                эксперт Прозоров Д.А.</p>
                        </div>
                        <!--    <div class="card-action">
                                <div class="right">

                                </div>
                            </div>-->
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>
                <div class="card horizontal scrollspy">

                    <div class="card-stacked ">
                        <div class="card-content">
                            <!--  <div class="title-news">
                                  <a class="btn-floating btn-large waves-effect waves-light grey lighten-1 btn-small">
                                      <i class="material-icons">settings</i>

                                  </a>
                                  <div class="title-news-data">
                                      <div >23.02.2020</div>
                                      <div><i class="small material-icons">event</i></div>
                                  </div>
                              </div>-->
                            <h2>Монопородная выставка ранга КЧК. ООО "Российская Кинологическая
                                Конфедерация</h2>
                            <h3> Шоу Галактика Винсент (Винт)</h3>

                            <p> Закрыл титул Чемпион России Чемпион РКФ</p>
                            <ul>
                                <li> 3 х САС</li>
                                <li> 2Х BOB</li>
                                <li> 1 x BOS</li>
                                <li>2 BIG - 3</li>
                            </ul>
                        </div>
                        <!--    <div class="card-action">
                                <div class="right">

                                </div>
                            </div>-->
                    </div>
                    <div class="card-image ">
                        <img src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/dogAndGirl.jpg">
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>
                <div class="card horizontal scrollspy">
                    <div class="card-image ">
                        <img src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/t2r.jpg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <!-- <div class="title-news">
                                 <div class="title-news-data">
                                     <div><i class="small material-icons">event</i></div>
                                     <div style="">13.12.2019</div>
                                 </div>
                                 <a class="btn-floating btn-large waves-effect waves-light grey lighten-1 btn-small">
                                     <i class="material-icons">settings</i>
                                 </a>
                             </div>-->
                            <h2> 18.07.2020 клубы МКОО НИКА и МКОО ОРФЕЙ.</h2>
                            <p>Шоу Галактика Гриффиндор Дебют в классе щенков.

                                Победитель класса. Лучший пуховый щенок.

                                Лучший щенок монопородной выставки. БИС.

                                эксперт Прозоров Д.А.</p>
                        </div>
                        <div class="card-action">

                        </div>
                    </div>
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
    import messages from "@/utils/messages";
    import localizeFilter from "../filters/localize.filter";

    export default {
        name: "News",
        metaInfo() {
            return {
                title: this.$title('News_Kennel'),
                meta: [
                    {
                        name: 'description',
                        content: 'Шоу Галактика Гриффиндор Дебют в классе щенков . Победитель класса. Лучший пуховый щенок. Лучший щенок монопородной выставки. БИС. эксперт Прозоров Д.А.'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
