const p3for999 = { template: '<div>p3for999</div>'}
	const p2for999 = { template: '<div>p2for999</div>'}
	const dresses = { template: '<div>dresses</div>'}
	const top_and_blouses = { template: '<div>top_and_blouses</div>'}

	const routes = [
		{ 
			path: '/p3for999',
			beforeEnter() {location.href = 'http://streetstylestore.com/index.php?id_category=181&controller=category'},
			component: p3for999
		},
		{ 
			path: '/p2for999',
			beforeEnter() {location.href = 'No URL'},
			component: p2for999
		},
		{ 
			path: '/dresses',
			beforeEnter() {location.href = 'No URL'},
			component: dresses
		},
		{ 
			path: '/top_and_blouses',
			beforeEnter() {location.href = 'No URL'},
			component: top_and_blouses
		}
		]

	const router = new VueRouter({
		routes
		})

	const app = new Vue({
		router
		}).$mount('#app')