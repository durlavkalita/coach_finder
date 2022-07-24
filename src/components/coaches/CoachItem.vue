<template>
    <li>
        <h3>{{fullname}}</h3>
        <h4>${{rate}}/hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{area}}</base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailsLink">View details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullname() {
            return this.firstName + ' ' + this.lastName
        },
        coachContactLink() {
            return this.$route.path+'/'+this.id+'/contact'
        },
        coachDetailsLink() {
            return '/coaches/'+this.id;
        }
    }
}
</script>