<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<div>
		<p>{{ price }}</p>
		<div>
			<p v-for="item in products" v-bind:key = "item">{{ item }}</p>
		</div>
	</div>
	<button v-on:click="test">버튼{{cnt}}</button>
</template>

<script>
export default {
  name: 'App',
  data() {
		return {
			cnt: 0,
			products: ['test', 'test2', 'test3'],
			test: () => {
				this.products.push('test');
				//cnt++;
			}
		}
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
