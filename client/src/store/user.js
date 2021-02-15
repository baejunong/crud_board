import axios from '@/utils/axios';
import router from '@/router';

const user = {
  namespaced: true,
  state: {
    login: false,
    loginModal: {
      active: false,
      inputId: null,
      inputPassword: null,
    },
    signUpModal: {
      active: false,
      panel: [],
      info: {
        id: null,
        password: null,
        name: null,
        email: null
      }
    },
    default: {
      signUpModal: {
        active: false,
        panel: [],
        personal: {
          info: {
            id: null,
            password: null,
            name: null,
            email: null
          }
        },
      },
    },
  },
  getters: {
    getLogin: (state) => state.login,
    getLoginModal: (state) => state.loginModal,
    getSignUpModal: (state) => state.signUpModal,
  },
  mutations: {
    setLogin: (state, bool) => {
      state.login = bool;
    },
    setLoginModal: (state, bool) => {
      state.loginModal.active = bool;
    },
    setSignUpModal: (state, bool) => {
      state.signUpModal.active = bool;
    },
    openSignUpModal: (state) => {
      // state.signUpModal.personal = { ...state.default.signUpModal.personal };
      state.signUpModal.active = true;
    },
  },
  actions: {
    login: (context) => {
      context.commit('setLogin', true);
      context.commit('setLoginModal', false);
    },
    logout: (context) => {
      context.commit('setLogin', false);
      router.go(router.currentRoute);
    },
    signUp: async (context) => {
      axios.post('/post', context.state.signUpModal.info)
        .then((result) => {
          console.log(result);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};

export default user;
