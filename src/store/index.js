import { createStore } from 'vuex';

const moduleA = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
};

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    // getter 的基本使用
    twoMultipleCount(state, _getters) {
      return state.count * 2;
    },
    // getter 中可以使用其他 getter
    twoMultipleCountAddOne(_state, getters) {
      return getters.twoMultipleCount + 1;
    },
    // 接收参数的 getter
    twoMultipleCountAddN(_state, getters) {
      return (n) => getters.twoMultipleCount + n;
    },
  },
  mutations: {
    // 同步更改 state 中的数据
    increment(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    // 异步更改 state 中的数据
    asyncIncrement(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload);
          resolve(payload);
        }, 1000);
      });
    },
  },
  modules: {
    moduleA,
  },
});

export default store;
