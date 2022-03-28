const app=Vue.createApp({
    data:()=>({
        basePrice:100
    }),
    computed:{
        computedNumber:function(){
            console.log("computed")
            return Math.random()
        }
    },
    methods:{
        methodsNumber:function(){
            console.log("methods")
            return Math.random()
        }
    }
})
app.mount('#app')