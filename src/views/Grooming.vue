<template>
    <div style="
    display: flex;
flex-flow: row wrap;
">

<!--            <LazyYoutubeVideo src="https://www.youtube.com/embed/4JS70KB9GS0"/>-->

        <div class="video">
            <LazyYoutubeVideo iframeAttributes={picture-in-picture} src="https://www.youtube.com/embed/GnKMwt_kxa8"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/GX4_ZdLpg74"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/KdUhkVyb8Xs"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/y03F7HT2meA"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/yNbTMu6Xri4"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/q7jBqPfjxsI"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/kut9b-PjmwA"/>
        </div>
        <div class="video">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/40AwAGxYz80"/>
        </div>
    </div>

    <!--    <LazyYoutubeVideo src="https://www.youtube.com/embed/4JS70KB9GS0" />-->
</template>

<script>
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'

    export default {
        name: "Grooming",
        data() {
            return {
                url: 'https://youtu.be/GnKMwt_kxa8' //https://youtu.be/GnKMwt_kxa8
            }
        },
        metaInfo() {
            return {
                title: this.$title('Menu_Root_Grooming')
            }
        },
        components: {
            LazyYoutubeVideo,
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
