//const app=Vue.createApp({
    //options
//})
//mountメソッドを利用することで指定したHTML要素がVue.jsが用意したDOMに置き換わる
//この操作をmountという
//app.mount('#app')

const app=Vue.createApp({
    data: () =>({
        message: 'Hello Vue.js!'
    })
}).mount('#app');