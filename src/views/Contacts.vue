<template>
    <div class="center-align">

        <div class="break"></div>
        <div class="break"></div>
        <div class="break"></div>
        <div class="header-wrap">
            <div class="vens"></div>

        </div>
        <div class="break"></div>

        <div style="
        margin: 5px auto;
        display: flex;
        flex-direction:column;
        height: 600px;
        width: 500px;
        justify-content: space-around;"
        >
            <h3 class="center-align"> Как с нами связаться:</h3>
            <div class="between contact">
                <div> +7-906-798-64-74</div>
                <div> WhatsApp</div>
                <div>Татьяна Чистонова</div>
            </div>


            <div class="evenly contact">
                <div>alise.70@mail.ru</div>
            </div>

            <div class="evenly contact">
                <div>+7-916-551-06-49</div>
                <div>Елизавета Прянишникова</div>
            </div>

            <div class="evenly contact">
                <div> elizabeth.prianishnikova@gmail.com</div>
            </div>

            <div class="header-wrap">
                <div class="vens"></div>
            </div>

           <div class="contact center-align"> Создание дизайна сайта, логотипов, визиток, редактирование фото

            Чистонова Ксения

            <br> <a href="https://vk.com/id28788145">ВКонтакте</a>
            <br> <a href="https://www.facebook.com/ksesha.chistonova">Facebook</a>
           </div>
            (нажмите на название соц.сети чтобы перейти на страницу)
        </div>
    </div>
</template>

<script>
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'
    export default {
        name: "Contacts",
        metaInfo() {
            return {
                title: this.$title('Contacts')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
