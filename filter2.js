const Filter = {
  data() {
    return {
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
};

Vue.createApp(Filter).mount("#filter");
