<template>
	<!-- 减法 -->
	<div>
		<h3>{{$store.getters.showNum}}</h3>
		<h3>count值为：{{count}}</h3>
		<!-- 第二步  写一个触发函数 -->
		<button @click="btnHander1">-1</button>
		<button @click="btnHander2">-N</button>
		<button @click="btnHander3">-异步操作</button>
		<button @click="subNAsync(5)">-带参数的异步操作</button>
	</div>
</template>

<script>
	// 第三步 引入一个映射变量
	import {
		mapState,
		mapMutations,
		mapActions,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			// 把全局属性中你的数据映射为当前组件的计算属性
			...mapState(['count'])
		},
		methods: {
			// 调用 第一步写的方法  并通过第三步引入的映射变量建立起方法函数之间的映射
			...mapMutations(['sub', 'subN']),
			...mapActions(['subAsync','subNAsync']),
			...mapGetters(['showNum']),
			btnHander1() {
				// 第四步 直接调用
				this.sub()
			},
			btnHander2() {
				this.subN(3)
			},
			btnHander3() {
				this.subAsync()
			},
			// 这里btnHander3 也可以不用写直接写subAsync到按钮函数中
			// btnHander4() {
			// 	this.subNAsync(5)
			// }

		}
	}
</script>

<style>
</style>
