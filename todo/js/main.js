const app=Vue.createApp({
    data: ()=>({
        newItem: " ",
        todos: []
    }),
    methods: {
        addItem: function(event){
            if (this.newItem===" ")return
            console.log("Clicked!")
            let todo={
                item: this.newItem,
                isDone:false
            }
            this.todos.push(todo)
            this.newItem=" "
        },
        deleteItem: function(index){
            //console.log("sssss")
            //console.log(index)
            this.todos.splice(index,1)
        }
    }
})
app.mount('#app')