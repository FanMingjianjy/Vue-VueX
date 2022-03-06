<template>
	<div>

		<my-Add></my-Add>
		<hr>
		<my-sub></my-sub>

	</div>
</template>

<script>
	import Add from './components/Add.vue'
	import Sub from './components/Sub.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			'my-Add': Add,
			'my-sub': Sub
		}
	}
</script>

<style>

</style>
