export default [{
		path: "/",
		redirect: "/login",
	},
	{
		path:"/login",
		name:"login",
		component:(resolve)=>require(["../components/login/login.vue"],resolve)
	},
	{
		path: "/home",
		name: "home",
		component: (resolve) => require(["../components/index/index.vue"], resolve),
		children: [
			{
				path: "/home/screen",
				name: "screen",
				component: (resolve) => require(["../components/screen/screen.vue"], resolve)
			},
			{
				path:"/home/modifyScreeninfo",
				name:"screeninfo",
				component:(resolve) => require(["../components/screen/modifyScreenInfo/modifyScreeninfo.vue"],resolve)
			},
			{
				path:"/home/teacher",
				name:"teacher",
				component:(resolve) => require(["../components/teacher/teacher.vue"],resolve)
			},

			{
				path: "/home/student",
				name: "student",
				component: (resolve) => require(["../components/student/student.vue"], resolve)
			},
			{
				path : '/home/manger',
				name:"manger",
				component:(resolve) => require(["../components/manger/manger.vue"],resolve)
			},
			{
				path:'/home/manroom',
				name:"manroom",
				component:(resolve)=>require(["../components/manroom/manroom.vue"],resolve)
			},
			{
				path:'/home/mandepartment',
				name:'mandepartment',
				component:(resolve)=>require(["../components/mandepartment/mandepartment.vue"],resolve)
			},
			{
				path:'/home/manpage',
				name:'manpage',
				component:(resolve)=>require(["../components/manpage/manpage.vue"],resolve)
			}
		]
	},

	{
		path: "/500",
		name: "error_500",
		meta: {
			title: "500"
		},
		component: (resolve) => require(["../components/error-page/500.vue"], resolve)
	},
	{
		path: "/401",
		name: "error_401",
		meta: {
			title: "401"
		},
		component: (resolve) => require(["../components/error-page/401.vue"], resolve)
	},
	{
		path: "*",
		name: "error_404",
		meta: {
			title: "404"
		},
		component: (resolve) => require(["../components/error-page/404.vue"], resolve)
	}
]