import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.config.globalProperties.foo = 'bar';

app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info);
}
app.mount('#app')
