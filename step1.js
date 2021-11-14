const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;   //  1秒ごとにdataのcounterがインクリメントしていく
    }, 1000);
  },
};

Vue.createApp(Counter).mount("#counter");
