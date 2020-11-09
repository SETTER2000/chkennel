<template>
    <div>
        <div class="header-wrap">
            <h1>{{'Base_Chips_Dogs' | localize}}</h1>
            <div class="vens"></div>
        </div>


        <div class="chips">
            <h2 class="center-align">Кобели</h2>
            <table class="responsive-table">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Чип</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> Стар Левел Терпикеравнос</td>
                    <td> -</td>
                </tr>
                <tr>
                    <td> Стар Левел Каус Бореалис</td>
                    <td>972270000283799</td>
                </tr>
                <tr>
                    <td> Мано Понис Фейерверкас</td>
                    <td>941000015361923</td>
                </tr>
                <tr>
                    <td> Плиар Постилион</td>
                    <td>643098100115350</td>
                </tr>
                <tr>
                    <td> Ланарт Кампари Ксоло Клаб</td>
                    <td>643094100094634</td>
                </tr>
                <tr>
                    <td> Шоу Галактика Триумф</td>
                    <td>9991000888002642</td>
                </tr>
                <tr>
                    <td> Стар Шоу Бон Ами Зорг Шоу Галактика</td>
                    <td>999100888002645</td>
                </tr>
                <tr>
                    <td> Шоу Галактика Бомбшелл</td>
                    <td>999100888002657</td>
                </tr>
                <tr>
                    <td> Шоу Галактика Бестер</td>
                    <td>999100888002650</td>
                </tr>
                <tr>
                    <td> Шоу Галактика Винсент</td>
                    <td>999100888002653</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="chips">
            <h2 class="center-align">Суки</h2>
            <table class="responsive-table">
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Чип</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Утренняя звезда Барби</td>
                    <td>643098100114975</td>


                </tr>
                <tr>
                    <td>Стар Левел Тиффани Тру Бриллианс</td>
                    <td>643094100275556</td>
                </tr>
                <tr>
                    <td>Шоу Галактика Экспенсив Джевелри</td>
                    <td>972270000338506</td>
                </tr>
                <tr>
                    <td>Офелия Засима</td>
                    <td>900164000824835</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import localizeFilter from "../filters/localize.filter";

    export default {
        name: "Chips",
        metaInfo() {
            return {
                title: this.$title('Menu_Footer_Chips')
            }
        },
    }
</script>

<style scoped>
    @import '../assets/front.css';
</style>
