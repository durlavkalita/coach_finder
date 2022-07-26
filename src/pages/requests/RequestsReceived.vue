<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Recieved</h2>
            </header>
            <ul v-if="hasRequests">
                <request-item-vue v-for="request in receivedRequests" :key="request.id" :email="req.userEmail" :message="req.message"></request-item-vue>
            </ul>
            <h3 v-else>No requests recieved</h3>
        </base-card>
    </section>
</template>

<script>
import RequestItemVue from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItemVue
    },
    computed: {
        recievedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
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