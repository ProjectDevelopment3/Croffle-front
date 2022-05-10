import { createWebHistory, createRouter } from 'vue-router';


// 라우터 정의
const routes = [
	// 루트: 랜딩 페이지
	{
		path: '/',
		component: () => import('@/views/LandingView.vue'),
	},
	// 메인 페이지 - 카페 전체 조회
	{
		path: '/cafes',
		component: () => import('@/views/MainView.vue'),
		children: [
			{ path: '/cafes',
				component: () => import('../components/Main/MainComponent.vue')},
		]
	},
	// 메인 페이지 - 카페 상세 조회
	{
		path: '/cafe',
		component: () => import('@/views/MainView.vue'),
		children: [
			{ path: '/cafe',
				component: () => import('../components/Cafe/CafeInfoComponent.vue')},
		]
	},
	// 제보하기 
	{
		path: '/report',
		component: () => import('@/views/ReportingView.vue'),
		children: [
			{	path: '/report/add',
			component: () => import('../components/Report/ReportAddComponent.vue'),
			},
			{	path: '/report/modify',
			component: () => import('../components/Report/ReportModifyComponent.vue'),
			},
			{	path: '/report/complete',
			component: () => import('../components/Report/ReportComplete.vue'),
			}
		]
	},
  // 회원가입
  {
		path: '/signup',
		component: () => import('@/views/SignupView.vue'),
		children: [
      { path: '',  
			component: () => import('../components/Signup/SignupComponent.vue'), },
      { path: '/signup/info',  
			component: () => import('../components/Signup/SignupComponentStep2.vue'), },
			{ path: '/signup/complete',  
			component: () => import('../components/Signup/SignupCompleteComponent.vue'), },
		]
	}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;