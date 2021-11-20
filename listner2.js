Vue.createApp({
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // メソッド内の`this`はVueインスタンスを参照
      alert('Hello ' + this.name + '!')
      // `event`はネイティブDOMイベント
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}).mount('#event-with-method')