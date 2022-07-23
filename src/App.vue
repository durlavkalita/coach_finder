<template>
  <HeaderVue></HeaderVue>
  <router-view></router-view>
</template>

<script>

import HeaderVue from "./components/layout/Header.vue";
export default {
  components: {
    HeaderVue
  }
}

</script>