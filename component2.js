const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
});

// コンポーネントインスタンス
  // vmはViewModelの略
  // コンポーネントインスタンスはどこかしらのDOMにマウントする必要がある
const vm = app.mount("#app");

// data で定義されたプロパティは、コンポーネントインスタンスを介して表示される
console.log(vm.count);
