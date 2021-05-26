<template>
	<div>
	<img alt="Vue logo" src="./assets/logo.png">
		<div>
			<p v-for="item in products" v-bind:key = "item">{{ item }}</p>
		</div>
		<button @click="test">버튼{{cnt}}</button>
		<button @click="ck">버튼{{cnt}}</button>
		<div>{{ counter }}</div>
		<div>{{message}}</div>
		<div>{{this.foo}}</div>
	</div>
</template>

<script>
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
