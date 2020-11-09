<template>
    <div>
        <div class="header-wrap">
            <h1>{{'Menu_Root_Services' | localize}}</h1>
            <div class="vens"></div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/p1.jpg">
                        <span>Хендлинг - подготовка собак и показ на выставке. </span>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h2>{{'Preparing_Show' | localize}}</h2>
                            <ul>
                                <li><strong>Подготовим к посещению выставок   питомца и его хозяина. К каждому питомцу находим индивидуальный подход.С учетом психики и индивидуальных способностей.</strong></li>
                                <li><strong>В нашей методике не используются силовые методы дресировки.Только позитивные эмоции и поощрение.

                                    Количество занятий индивидуально для каждой собаки.</strong></li>
                            </ul>
                            <div class="end">
<!--                                <span>вл. Татьяна Чистонова Моск обл.</span>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-wrap">
                    <div class="vens"></div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>    Показ  на выставках России и Европы</h2>
                <em>Мы работаем с собаками разных групп и возрастов.</em>
                <div  class="gallery-services">
                    <el-image
                            v-for="src of srcList"
                            :src="src"
                            :fit="'cover'"
                            :preview-src-list="srcList">
                    </el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Services",
        data:()=>({
            srcList: [
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/1.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/2.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/3.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/4.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/5.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/6.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/7.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/8.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/9.jpg',
                'https://d3a1wbnh2r1l7y.cloudfront.net/show_galaktika/services/10.jpg',
            ]
        }),
        metaInfo() {
            return {
                title: this.$title('Menu_Root_Services')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
