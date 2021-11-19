const Filter = {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};

Vue.createApp(Filter).mount("#filter");
