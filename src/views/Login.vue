<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <router-link to="/"><span class="card-title">{{'Name_Suite' | localize}}</span></router-link>
            <div class="input-field">
                <input
                        id="email"
                        type="text"
                        v-model.trim="email"
                        :class="{invalid:($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Поле Email не должно
                    быть пустым!</small>
                <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный
                    Email</small>
            </div>
            <div class="input-field">
                <input
                        id="password"
                        type="password"
                        v-model.trim="password"
                        :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small class="helper-text invalid"
                       v-if="$v.password.$dirty && !$v.password.required">Введите пароль</small>
                <small class="helper-text invalid"
                       v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль должен быть не менее
                    {{$v.password.$params.minLength.min}} знаков. Сейчас он {{password.length}}</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                        class="btn waves-effect waves-light auth-submit"
                        type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import {email, required, minLength} from 'vuelidate/lib/validators'
    import messages from "@/utils/messages";
    import localizeFilter from "../filters/localize.filter";
    export default {
        name: "login",
        metaInfo() {
            return {
                title: this.$title('Login')
            }
        },
        data: () => ({
            email: '',
            password: '',
            isRuLocale: true
        }),
        validations: {
            email: {email, required},
            password: {required, minLength: minLength(6)}
        },
        mounted() {
           // this.isRuLocale = this.info.locale === 'ru-RU'
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message])
            }
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password
                }
                try {
                    await this.$store.dispatch('login', formData)
                    this.$router.push('/home');
                } catch (e) { }

            }
        }
    }
</script>


