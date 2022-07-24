<template>
    <section>
        <base-card>
            <h2>Register as a coach</h2>
            <coach-form-vue @save-data="saveData"></coach-form-vue>
        </base-card>
    </section>
</template>

<script> 
import CoachFormVue from '../../components/coaches/CoachForm.vue'

export default {
    components: {
        CoachFormVue
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>