<template>
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Тип</th>
            <th>Открыть</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(record, idx) of records" :key="record.id">
            <th>{{idx + 1}}</th>
            <th>{{record.amount | currency('RUB')}}</th>
            <th>{{record.date | date('datetime')}}</th>
            <th>{{record.categoryName}}</th>
            <td>
                <span
                        :class="[record.typeClass]"
                        class="white-text badge"
                >{{record.typeText}}</span>
            </td>
            <td>
                <button
                        v-tooltip="'Посмотреть запись'"
                        class="btn-small btn"
                        @click="$router.push('/detail/' + record.id)">
                    <i class="material-icons">open_in_new</i>
                </button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "HistoryTable",
        props: {
            records: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>
