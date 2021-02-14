<template>
  <v-container>
    <span v-if="!getLogin">로그인해주세요.</span>
    <board v-if="getLogin"></board>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Board from '@/components/Board'

export default {
  name: 'Home',
  components: { Board },
  computed: {
    ...mapGetters('user', ['getLogin'])
  }
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th{
  padding: 0 4px !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td:last-child{
  text-align: center !important;
}
</style>
