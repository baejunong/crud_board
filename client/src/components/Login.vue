<template>
  <v-dialog
    v-model="getLoginModal.active"
    max-width="400px"
    @click:outside="setLoginModal(false)"
  >
    <v-card>
      <v-card-title class="text-center" style="display: block">
        로그인
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="아이디" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="비밀번호" type="password" required />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="login">
          로그인
        </v-btn>
        <v-btn color="blue darken-1" text @click="setLoginModal(false)">
          취소
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['getLoginModal']),
  },
  methods: {
    ...mapActions('user', ['login']),
    ...mapMutations('user', ['setLoginModal']),
  },
};
</script>

<style>

</style>
