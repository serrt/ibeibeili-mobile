const routes = [
  { path: '/', name: 'root', component: (resolve) => { require(['./views/Home.vue'], (resolve)) } },
  // 主页
  { path: '/home', name: 'home', component (resolve) { require(['./views/Home.vue'], (resolve)) } },
  // 登录
  { path: '/login', name: 'login', component (resolve) { require(['./views/Login.vue'], (resolve)) } },
  // 注册
  { path: '/register', name: 'register', component (resolve) { require(['./views/Register.vue'], (resolve)) } },
  // 关于我们
  { path: '/about', name: 'about', component (resolve) { require(['./views/About.vue'], (resolve)) } },
  // 使用财富值
  { path: '/virtual', name: 'virtual', component (resolve) { require(['./views/Virtual.vue'], (resolve)) } },
  // 项目列表
  { path: '/projects', name: 'projects', component: (resolve) => { require(['./views/ProjectList.vue'], (resolve)) } },
  // 项目详细
  { path: '/project/:id', name: 'project-detail', component: (resolve) => { require(['./views/ProjectDetail.vue'], (resolve)) } },
  // 投资项目
  { path: '/project/:id/invest-project', name: 'project-invest', component: (resolve) => { require(['./views/ProjectInvest.vue'], (resolve)) } },
  // 投资成功
  { path: '/project/:id/invest-success', name: 'invest-success', component: (resolve) => { require(['./views/InvestSuccess.vue'], (resolve)) } },
  // 发现
  { path: '/find', name: 'find', component: (resolve) => { require(['./views/Find.vue'], (resolve)) } },
  // 我的账户
  { path: '/user', name: 'user', component: (resolve) => { require(['./views/User.vue'], (resolve)) } },
  // 提现
  { path: '/recharge', name: 'recharge', component: (resolve) => { require(['./views/Recharge.vue'], (resolve)) } },
  // 充值
  { path: '/withdraw', name: 'withdraw', component: (resolve) => { require(['./views/Withdraw.vue'], (resolve)) } },
  // 签到
  { path: '/sign', name: 'sign', component: (resolve) => { require(['./views/User.vue'], (resolve)) } },
  // 用户福利（红包、加息券、财富值）
  { path: '/user-gift', name: 'user-gift', component: (resolve) => { require(['./views/UserGift.vue'], (resolve)) } },
  // 用户投资项目
  { path: '/user-project', name: 'user-project', component: (resolve) => { require(['./views/UserProject.vue'], (resolve)) } },
  // 用户投资项目详细
  { path: '/user-project/:id', name: 'user-project-detail', component: (resolve) => { require(['./views/UserProjectDetail.vue'], (resolve)) } },
  // 交易详细
  { path: '/user-trade', name: 'user-trade', component: (resolve) => { require(['./views/UserTrade.vue'], (resolve)) } },
  // 用户认证
  { path: '/user-verify', name: 'user-verify', component: (resolve) => { require(['./views/userVerify.vue'], (resolve)) } },
  { path: '*', name: '404', component (resolve) { require(['./views/NotFound.vue'], (resolve)) } }
]

export default routes
