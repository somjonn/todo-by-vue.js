const app = Vue.createApp({
   data() {
      return{
         newTodoText: '',
         todos: [
            {
               id: 1,
               title: 'Feed the cat'
            },
            {
               id: 2,
               title: 'Feed the dog'
            }
         ],
         nextTodoId : 3
      }
   },
   methods: {
      addNewTodo(){
         this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
         })
         this.newTodoText = ''
      }
   }
})

app.component('todo-item', {
   template:`
   <li>
   {{title}}
   <button v-on:click="$emit('remove')">Remove</button>
   </li>
   `,
   props: ['title'],
   emits: ['remove']
})

app.mount('#todo-list')