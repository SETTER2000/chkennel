<template>
    <div class="b">
        <div class="br">
            <!-- <div class="bc">
                 <div class="bi">1</div>
             </div>-->
            <div class="bc">
                <div class="bi">
                    <ul class="nav flex-column">
                        <router-link
                                v-for="link in links"
                                :key="link.url"
                                tag="li"
                                class="nav-item flex-item"
                                active-class="active"
                                :to="link.url"
                                :exact="link.exact"
                        ><a href="#" class="waves-effect pointer nav-link active">{{link.title}}</a></router-link>
                       <!-- <li class="nav-item flex-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item flex-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item flex-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-1</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-2</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-3</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-4</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-5</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-6</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-7</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-8</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-9</a></li>
                        <li class="nav-item flex-item"><a href="" class="nav-link">Link-10</a></li>
                        <li class="nav-item flex-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>-->
                    </ul>
                </div>
            </div>
            <!--   <div class="bc">
                   <div class="bi">3</div>
               </div>-->
        </div>

        <!--   <ul class="nav flex-column">
               <li class="nav-item flex-item">
                   <a class="nav-link active" href="#">Active</a>
               </li>
               <li class="nav-item flex-item">
                   <a class="nav-link" href="#">Link</a>
               </li>
               <li class="nav-item flex-item">
                   <a class="nav-link" href="#">Link</a>
               </li>
               <li class="nav-item flex-item">
                   <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
               </li>
           </ul>-->
    </div>
    </div>
</template>

<script>
    import localizeFilter from "../../filters/localize.filter";

    export default {
        name: "MenuFloating",
        data: () => ({
            links: [
                {title: localizeFilter('Menu_Root_Home'), url: '/',exact:true},
                {title: localizeFilter('Menu_Root_News'), url: '/news'},
                {title: localizeFilter('Menu_Root_Males'), url: '/males'},
                {title: localizeFilter('Menu_Root_Dams'), url: '/dams'},
                {title: localizeFilter('Menu_Root_Puppies'), url: '/puppies'},
                {title: localizeFilter('Menu_Root_Grooming'), url: '/grooming'},
                {title: localizeFilter('Menu_Root_Media'), url: '/media'},
                {title: localizeFilter('Menu_Root_Services'), url: '/services'},
                {title: localizeFilter('Menu_Root_Contacts'), url: '/contacts'}
            ]
        })
    }
</script>

<style scoped>
    .flex-container {
        /* We first create a flex layout context */
        display: flex;

        /* Then we define the flow direction
           and if we allow the items to wrap
         * Remember this is the same as:
         * flex-direction: row;
         * flex-wrap: wrap;
         */
        flex-flow: column wrap;

        /* Then we define how is distributed the remaining space */
        justify-content: space-around;

        padding: 0;
        margin: 0;
        list-style: none;
    }

    .flex-item {
        background: #ffffff;
        padding: 5px 5px 5px 15px;
        width: 200px;
        margin-top: 10px;
        line-height: 40px;
        /*font-weight: bold;*/
        font-size: 1em;
        text-align: start;
    }

    .b {
        text-align: center;
    }

    .br {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: fixed;
        /*  position: fixed;
          left: 100px;
          top:40%;*/
        height: 100vh;
        /*border: 20px solid #9e9d24;*/
        margin-right: 20px;
    }

    .bc {
        /*border: 20px solid #5a5a5a;*/
    }

    .bi {
        background: #FF8EAE;
        opacity: .9;
        padding: 50px;
        color: white;
        font-weight: 700;
    }

    @media only screen and (max-width: 1600px) {
        .b {
            display: none;
        }
    }

</style>
