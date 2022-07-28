<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <section>
            <base-card>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <base-spinner v-if="isLoading"></base-spinner>
                <ul v-else-if="hasRequests && !isLoading">
                    <request-item-vue v-for="request in receivedRequests" :key="request.id" :email="request.userEmail" :message="request.message"></request-item-vue>
                </ul>
                <h3 v-else>No requests received</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import RequestItemVue from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItemVue
    },
    data() {
        return {
            isLoading: false,
            error: null
        };
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    },
    created() {
        this.loadRequests();
    },
    methods: {
        loadRequests() {
            this.isLoading = true;
            try {
                this.$store.dispatch('requests/fetchRequests');
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

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>