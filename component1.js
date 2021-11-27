const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables", color: "Green" },
        { id: 1, text: "Cheese", color: "Yellow" },
        { id: 2, text: "Meat", color: "Red" },
      ],
    };
  },
};

const app = Vue.createApp(TodoList);

app.component("todo-item", {
  props: ["todo"],
  template: `<li>{{ todo.text }}</li>`,
  template: `<li>{{ todo.color }}</li>` //両方表示することはできない
});

app.mount("#todo-list-app");
