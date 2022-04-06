const app = Vue.createApp({
    data: () => ({
      message:''
    }),
    methods:{
      clickHandler:function(){
       this.message= new Date().toLocaleTimeString()
       console.log(this.message)
      }
    }
  })
  app.mount('#app')