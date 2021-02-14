<template>
  <v-data-table
    :headers="getHeaders"
    :items="getItems"
    :loading="getLoading"
    loading-text="로딩중입니다. 기다려주세요."
    sort-by="board_id"
    sort-desc="false"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>crud board</v-toolbar-title>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Board",
  computed: {
    ...mapGetters('board', ['getHeaders', 'getItems', 'getLoading'])
  },
  methods: {
    ...mapActions('board', ['getList'])
  },
  created() {
    this.getList()
  }
}
</script>

<style scoped>

</style>
