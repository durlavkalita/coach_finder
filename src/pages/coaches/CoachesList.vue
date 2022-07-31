<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <section>
            <coach-filter-vue @change-filter="setFilters"></coach-filter-vue>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                    <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login</base-button>
                    <base-button v-if='!isCoach && !isLoading && isLoggedIn' link to="/register">Register as coach</base-button>
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <coach-item-vue v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id"
                        :firstName="coach.firstName" :lastName="coach.lastName" :rate="coach.hourlyRate"
                        :areas="coach.areas"></coach-item-vue>
                </ul>
                <h3 v-else>No coaches found.</h3>
            </base-card>
        </section>
    </div>
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
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                programming: true
            }
        };
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
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;
        }
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters
        },
        loadCoaches(refresh = false) {
            this.isLoading = true;
            try {
                this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
            } catch (error) {
                this.error = error.message || 'something went wrong'
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
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
