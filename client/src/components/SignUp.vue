<template>
  <v-dialog
    max-width="1200px"
    persistent
    v-model="getSignUpModal.active"
  >
    <v-card class="sign-up">
      <v-form
        ref="form"
        lazy-validation
      >
        <v-card-title class="text-center" style="display: block">
          회원가입
        </v-card-title>
        <v-card-text>
          <img
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            style="position:fixed;width:30px;right:16px;top:0;z-index:2;cursor:pointer;"
            @click="setSignUpModal(false)"
            alt="접기 버튼">
        </v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="아이디" required v-model="getSignUpModal.info.id" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="비밀번호" type="password" required v-model="getSignUpModal.info.password" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="이름" type="password" required v-model="getSignUpModal.info.name" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="메일주소" type="password" required v-model="getSignUpModal.info.email_address" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="validate">
            제출하기
          </v-btn>
          <v-btn color="blue darken-1" text @click="setSignUpModal(false)">
            취소
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['getSignUpModal']),
  },
  methods: {
    ...mapMutations('user', ['setSignUpModal']),
    ...mapActions('user', ['signUp']),
    validate() {
      setTimeout(() => {
        const result = this.$refs.form.validate();
        if (result) this.signUp();
        console.log(`result:${result}`);
      }, 100);
    },
    log() {
      console.log(this.item);
    },
  },
};
</script>

<!--suppress CssUnusedSymbol -->
<style>
.sign-up .row{
  margin: 0 -4px !important;
}
.sign-up .input .col{
  padding: 0 4px !important;
}
.sign-up .v-input{
  display: block;
  text-align: right;
}
.sign-up .input-label{
  /* background-color: #dce6f1; */
  background-color: #091f3a;
  display: flex !important;
  text-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  border: solid black !important;
  border-width: 0 1px !important;
  color: #fff;
}
.sign-up .theme--light.v-text-field > .v-input__control > .v-input__slot:before{
  //border: none;
}
.sign-up .input>.row{
  border: solid black !important;
  border-width: 1px 1px 0 0 !important;
}
.sign-up .input>.row:last-child{
  border: solid black !important;
  border-width: 1px 1px 1px 0 !important;
}
.sign-up .input-table .col{
  border: solid black !important;
  border-width: 1px 0 0 1px !important;
}
.sign-up .input-table .row:not(:first-child) .col{
  padding: 8px 12px !important;
}
.sign-up .input-table .col:last-child{
  border: solid black !important;
  border-width: 1px 1px 0 1px !important;
}
.sign-up .input-table .row:last-child .col{
  border: solid black !important;
  border-width: 1px 0 1px 1px !important;
}
.sign-up .input-table .row:last-child .col:last-child{
  border: 1px solid black !important;
}
</style>
