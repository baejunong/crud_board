<template>
  <v-container>
    <v-tabs v-model="tabs">
      <v-tab>
        계정별 내역
      </v-tab>
      <v-tab>
        소요항목별 내역
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <spent-table-by-account />
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title>
            An awesome title
          </v-card-title>
          <v-card-text>
            <p>bbbbbb</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import SpentTableByAccount from '@/components/Tables/SpentTableByAccount.vue';

export default {
  components: {
    SpentTableByAccount,
  },
  computed: {
    ...mapGetters('spent', ['getTabs', 'getTableByAccount']),
    tabs: {
      get() {
        return this.getTabs;
      },
      set(tab) {
        this.setTabs(tab);
      },
    },
  },
  methods: {
    ...mapMutations('spent', ['setTabs']),
  },
};
</script>

<style>

</style>
