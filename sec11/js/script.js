const app = Vue.createApp({
    data: () => ({
      message:''
    }),
    methods:{
      clickHandler:function(message){
       this.message=message
      }
    }
  })
  app.mount('#app')