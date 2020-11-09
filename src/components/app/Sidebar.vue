<template>
    <ul class="sidenav app-sidenav " :class="{open:value}">
        <li>
            <a href="#" @click.prevent="toSuite" class="black-text">
                <i class="material-icons">assignment_return</i>
                {{'Menu_To_Suite' | localize}}
            </a>
        </li>
        <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
                >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";
    export default {
        props:['value'],
        data: () => ({
            links: [
                // {title: localizeFilter('Menu_To_Suite'), url: '/',exact:true},
                {title: localizeFilter('Menu_Bill'), url: '/home',exact:true},
                {title: localizeFilter('Menu_History'), url: '/history'},
                {title: localizeFilter('Menu_Planning'), url: '/planning'},
                {title: localizeFilter('Menu_NewRecord'), url: '/record'},
                {title: localizeFilter('Menu_Category'), url: '/categories'},
            ]
        }),
        methods: {
            async toSuite() {
                // await this.$store.dispatch('toSuite')
                this.$router.push('/?message=notExit')
            }
        },
        beforeDestroy() {
            console.log('before destroy');
         /*   clearInterval(this.interval)
            if (this.dropdown && this.dropdown.destroy) {
                this.dropdown.destroy()
            }*/
        }
    }
</script>

<style scoped>

</style>
