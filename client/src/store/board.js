import axios from '@/utils/axios';

const board = {
  namespaced: true,
  state: {
    headers: [
      {
        text: '번호',
        value: 'board_id'
      },
      {
        text: '제목',
        value: 'title'
      },
      {
        text: '작성자',
        value: 'writer'
      },
      {
        text: '작성일',
        value: 'createdAt'
      }
    ],
    items: [],
    loading: true,
  },
  getters: {
    getHeaders: (state) => state.headers,
    getItems: (state) => state.items,
    getLoading: (state) => state.loading,
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setLoading: (state, bool) => {
      state.loading = bool;
    }
  },
  actions: {
    getList({ state, commit }) {
      axios.get('/boardList')
        .then(result => {
          const {data} = result
          let items = [{}]
          for(let i = 0; i < data.length; i++) {
            items[i] = {}
            items[i].board_id = data[i].board_id
            items[i].title = data[i].title
            items[i].writer = data[i].user.name
            items[i].createdAt = data[i].createdAt
          }
          commit('setItems', items)
        })
        .then(() => {
          commit('setLoading', false)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
};

export default board;
