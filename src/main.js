import { createApp } from 'vue'
import App from './App.vue'
import tem1 from './components/tem1.vue'

const app = createApp(App);
app.config.globalProperties.foo = 'bar';

app.component('tem1', tem1);

app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info);
}
app.mount('#app')
