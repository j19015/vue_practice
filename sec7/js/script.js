/*const app=Vue.createApp({
    data:()=>({
      firstName:'',
      lastName:'',
      fullName:''
    }),
    watch:{
        firstName:function(value){
            this.fullName=value+''+this.lastName
        },
        lastName:function(value){
            this.fullName=this.firstName+' '+value
        }
    }

})
app.mount('#app')*/

const app=Vue.createApp({
    data:()=>({
      colors:[
          {name: 'red'},
          {name: 'Green'},
          {name: 'Blue'}
      ]
    }),
    watch:{
        colors:{
            handler: function(newValue,oldValue){
                console.log('Update!')
            },
            deep: true
        }
    },
    methods:{
        onClick:function(event){
            this.colors[1].name='White'
        }
    }

})
app.mount('#app')