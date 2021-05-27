<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png">
		<div>component test</div>
		<tem1 />
		<tem2 />
		<tem3 />
	</div>
</template>

<script>
import tem2 from './components/tem2.vue'
import tem3 from './components/tem3.vue'

export default {
	name: 'App',
	data() {
		return {
			counter: 0,
			cnt: 0,
			message: 'test',
			products: ['test', 'test2', 'test3'],
			test: () => {
				this.products.push('test');
				//cnt++;
			}
			
		}
	},
	methods: {
		ck: () => {
			this.message = 'test4';
		}
	},
	mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
	components: {
		tem2, tem3
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
