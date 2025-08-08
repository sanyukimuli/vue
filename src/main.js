import { createApp } from 'vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from './router'

const app = createApp(App) //this is a selctor that selects the div with id app that is in index.html and it takes in App which is a vue js component as specified on line 3

app.use(router)
app.mount('#app')

//our focu is now not on index.html or main.js but instead app.vue
