<template>
	<!-- 加法 -->
	<div>
		<h3>{{$store.getters.showNum}}</h3>
		<!-- this.$store.state.全局数据名称 -->
		<h3>count值为：{{$store.state.count}}</h3>
		<button @click="btnHandler1">+1的操作</button>
		<button @click="btnHandler2">+3传递值的操作</button>
		<button @click="btnHandler3">+3异步的操作</button>
		<button @click="btnHandler4">+3带参数异步的操作</button>
	</div>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			btnHandler1() {
				// this.$store.state.count ++;
				//不合法的，因为直接在这里修改的全局的数据  组件是不能修改全局的数据的
				//调用state提供的mutations内的函数
					this.$store.commit('add')
					// 传递参数的方式
					// this.$store.commit('add',3)
			},
			btnHandler2() {
					// 传递参数的方式
					this.$store.commit('add2',3)
			},
			//this.$store.dispatch是触发actions的第一种方式
			btnHandler3() {
					this.$store.dispatch('addAsync',5)
			},
			//触发异步任务携带参数
			btnHandler4() {
					this.$store.dispatch('addAsync',5)
			},
			
		}
	}
</script>

<style>
</style>
