import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 共享数据
		count: 0
	},
	getters: {
		showNum(state) {
			return `当前最新的数据${state.count}`
		}
	},
	mutations: {
		// this.$store.commit()是触发mutations的第一种方式，
		// add(state) {
		// 	// 不要在mutations执行异步操作
		// 	// setTimeout(() => {
		// 	//更改状态
		// state.count++
		// 	// }, 1000)
		//},
		add(state) {
			state.count ++
		},
		// 传递参数的方式
		add2(state, step) {
			state.count += step
		},
		///触发mutations的第二种方式
		// 第一步写一个方法
		sub(state) {
			state.count--
		},
		subN(state, step) {
			state.count -= step;
		}
	},
	actions: {
		// addAsync(context) {
		// 	setTimeout(() => {
		// 		context.commit('add')
		// 	}, 1000)
		// }
		addAsync(context, step) {
			setTimeout(() => {
				context.commit('add', step)
			}, 1000)
		},
		subAsync(context) {
			setTimeout(() => {
				context.commit('sub')
			}, 1000)
		},
		subNAsync(context, step) {
			setTimeout(() => {
				context.commit('subN', step)
			}, 1000)
		}
	}
})