<template>
    <section>
        <coach-filter-vue @change-filter="setFilters"></coach-filter-vue>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button v-if='isCoach' link to="/register">Register as coach</base-button>
        </div>
        <ul v-if="hasCoaches">
            <coach-item-vue 
            v-for="coach in filteredCoaches" 
            :key="coach.id" 
            :id="coach.id" 
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
            ></coach-item-vue>
        </ul>
        <h3 v-else>No coaches found.</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItemVue from '../../components/coaches/CoachItem.vue';
import CoachFilterVue from '../../components/coaches/CoachFilter.vue';

export default {
    components: {
        CoachItemVue,
        CoachFilterVue
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                programming: true
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if (this.activeFilters.programming && coach.areas.includes('programming')) {
                    return true;
                }
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        }
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters
        }
    }
}
</script>

<!-- for pinia -->
<!-- <script>
import { useCoachStore } from '../../stores/CoachStore'

export default {
    setup() {
        const coachStore = useCoachStore()

        return {
            coachStore
        }
    },
    created() {
        this.coachStore.fetchName().catch(error=>{
            throw error
        })
    }
}
</script> -->
