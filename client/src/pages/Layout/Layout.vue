<template>
  <v-app>
    <top-navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import TopNavbar from './TopNavbar.vue';

export default {
  components: {
    TopNavbar
  },
  computed: {
    ...mapGetters('user', ['getLogin']),
  },
};
</script>

<style>

</style>
