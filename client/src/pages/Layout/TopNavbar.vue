<template>
  <nav>
    <v-app-bar
      app
      color="primary"
      dark
      height="72px"
    >
      <v-list color="primary" flat>
        <v-list-item class="pl-0" to="/">
          <v-img
            alt="KS Name"
            class="shrink"
            contain
            min-width="100"
            src="@/assets/board_logo.png"
            width="100"
          />
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>

      <v-btn
        v-if="!getLogin"
        @click="setLoginModal(true)"
        text
      >
        <span class="mr-2">로그인</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
        v-if="!getLogin"
        @click="openSignUpModal"
        text
      >
        <span class="mr-2">회원가입</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn
        v-if="getLogin"
        @click="logout"
        text
      >
        <span class="mr-2">로그아웃</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <login />
    <sign-up />
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';

export default {
  components: {
    Login,
    SignUp,
  },
  computed: {
    ...mapGetters('user', ['getLogin']),
  },
  methods: {
    ...mapActions('user', ['login', 'logout']),
    ...mapMutations('user', ['setLoginModal', 'openSignUpModal']),
  },
};
</script>

<style>

</style>
