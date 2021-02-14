<template>
  <v-container ref="address">
    <img
      src="//t1.daumcdn.net/postcode/resource/images/close.png"
      @click="closeAddressPicker"
      alt="접기 버튼">
  </v-container>
</template>

<!--suppress JSUnresolvedFunction, JSUnresolvedVariable, JSUnusedGlobalSymbols -->
<script>
/* eslint-disable camelcase,no-undef */
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('user', ['setAddress', 'setPost', 'closeAddressPicker']),
  },
  mounted() {
    // http://postcode.map.daum.net/guide 에서 참고
    const { address } = this.$refs;
    const self = this;

    new daum.Postcode({
      oncomplete(data) {
        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let addr = ''; // 주소 변수

        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        self.setAddress(addr);
        self.setPost(data.zonecode);
        // 커서를 상세주소 필드로 이동한다.
        // document.getElementById("sample3_detailAddress").focus();
        self.closeAddressPicker();
        self.detailEl.focus();
      },
      // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
      // onresize(size) {
      //   element_wrap.style.height = `${size.height}px`;
      // },
      width: '100%',
      height: '100%',
    }).embed(address, { autoClose: false });
  },
  props: {
    detailEl: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.container{
  padding: 0 !important;
  border: 1px solid;
  width:500px;
  height:450px;
  margin:5px 0;
  position:relative
}
img{
  cursor: pointer;
  position:absolute;
  right:0;
  top:-1px;
  z-index:1;
}
</style>
