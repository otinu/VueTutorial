Vue.createApp({
  data() {
    return {
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2020-03-22'
      }
    }
  }
}).mount('#v-for-object')