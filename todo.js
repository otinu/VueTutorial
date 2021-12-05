const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      // console.log('Clicked!')
      if(this.newItem === '') return
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
    },
    deleteItem: function(event) {
      console.log('Delete!')
    }
  }
})
app.mount('#app')