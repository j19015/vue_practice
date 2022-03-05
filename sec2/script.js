//const app=Vue.createApp({
    //options
//})
//mountメソッドを利用することで指定したHTML要素がVue.jsが用意したDOMに置き換わる
//この操作をmountという
//app.mount('#app')

const app=Vue.createApp({
    data: () =>({
        message:"hello vue.js!"
    })
})
app.component('hello-component',{
    template: '<p>Hello</p>'
})
app.mount("#app")