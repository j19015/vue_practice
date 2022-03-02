//const app=Vue.createApp({
    //options
//})
//mountメソッドを利用することで指定したHTML要素がVue.jsが用意したDOMに置き換わる
//この操作をmountという
//app.mount('#app')

const app=Vue.createApp({
    data: () =>({
        message: 'Hello Vue.js!',
        count:99,
        //構造体は{}で囲って記述
        user:{
            lastName:'Nakamura',
            firstName:'Uita',
            prefecture: 'Tokyo'
        },
        //配列は[]で囲う
        colors:['Red','Green','Blue']
    })
}).mount('#app');