const routes = [
  { path: '/', name: 'root', component: (resolve) => { require(['./views/Home.vue'], (resolve)) } },
  // 主页
  { path: '/home', name: 'home', component (resolve) { require(['./views/Home.vue'], (resolve)) } },
  { path: '/platform-money', name: 'platform-money', component (resolve) { require(['./views/PlatformMoney.vue'], (resolve)) } },
  // 登录
  { path: '/login', name: 'login', component (resolve) { require(['./views/Login.vue'], (resolve)) } },
  // 注册
  { path: '/register', name: 'register', component (resolve) { require(['./views/Register.vue'], (resolve)) } },
  // 找回密码
  { path: '/reset-password', name: 'reset-password', component (resolve) { require(['./views/ResetPassword.vue'], (resolve)) } },
  // 关于我们
  { path: '/about', name: 'about', component (resolve) { require(['./views/About.vue'], (resolve)) } },
  // 使用财富值
  { path: '/virtual', name: 'virtual', component (resolve) { require(['./views/Virtual.vue'], (resolve)) } },
  // 项目列表
  { path: '/projects', name: 'projects', component: (resolve) => { require(['./views/ProjectList.vue'], (resolve)) } },
  // 项目详细
  { path: '/project/:id', name: 'project-detail', component: (resolve) => { require(['./views/ProjectDetail.vue'], (resolve)) } },
  // 项目属性
  { path: '/project-attr/:id/:attr', name: 'project-attr', component: (resolve) => { require(['./views/ProjectAttr.vue'], (resolve)) } },
  // 项目投资列表
  { path: '/project-invest-list/:id', name: 'project-invest-list', component: (resolve) => { require(['./views/ProjectInvestList.vue'], (resolve)) } },
  // 投资项目
  { path: '/project/:id/invest-project', name: 'project-invest', component: (resolve) => { require(['./views/ProjectInvest.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 投资成功
  { path: '/invest-success/:sn', name: 'invest-success', component: (resolve) => { require(['./views/InvestSuccess.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 发现
  { path: '/find', name: 'find', component: (resolve) => { require(['./views/Find.vue'], (resolve)) } },
  // 公告
  { path: '/notice', name: 'notice', component: (resolve) => { require(['./views/Notice.vue'], (resolve)) } },
  // 帮助中心
  { path: '/help', name: 'help', component: (resolve) => { require(['./views/Help.vue'], (resolve)) } },
  // 我的账户
  { path: '/user', name: 'user', component: (resolve) => { require(['./views/User.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 任务中心
  { path: '/user-task', name: 'user-task', component: (resolve) => { require(['./views/UserTask.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 账户设置
  { path: '/user-set', name: 'user-set', component: (resolve) => { require(['./views/UserSet.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 修改登录密码
  { path: '/user-edit-pwd', name: 'user-edit-pwd', component: (resolve) => { require(['./views/UserEditPwd.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户银行卡
  { path: '/user-bank', name: 'user-bank', component: (resolve) => { require(['./views/UserBank.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户解绑银行卡
  { path: '/user-bank-unbind', name: 'user-bank-unbind', component: (resolve) => { require(['./views/UserBankuUnbind.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 设置用户名
  { path: '/user-set-username', name: 'user-set-username', component: (resolve) => { require(['./views/UserSetUsername.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 提现
  { path: '/recharge', name: 'recharge', component: (resolve) => { require(['./views/Recharge.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 充值
  { path: '/withdraw', name: 'withdraw', component: (resolve) => { require(['./views/Withdraw.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 签到
  { path: '/sign', name: 'sign', component: (resolve) => { require(['./views/Sign.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 补签卡
  { path: '/sign-remark', name: 'sign-remark', component: (resolve) => { require(['./views/SignRemark.vue'], (resolve)) } },
  // 用户福利（红包、加息券、财富值）
  { path: '/user-gift', name: 'user-gift', component: (resolve) => { require(['./views/UserGift.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户投资项目
  { path: '/user-project', name: 'user-project', component: (resolve) => { require(['./views/UserProject.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户投资项目详细
  { path: '/user-project/:id', name: 'user-project-detail', component: (resolve) => { require(['./views/UserProjectDetail.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 项目合同
  { path: '/user-project-contract/:id', name: 'user-project-contract', component: (resolve) => { require(['./views/UserProjectContract.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户消息
  { path: '/user-message', name: 'user-message', component: (resolve) => { require(['./views/UserMessage.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 交易详细
  { path: '/user-trade', name: 'user-trade', component: (resolve) => { require(['./views/UserTrade.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 意见反馈
  { path: '/user-feedback', name: 'user-feedback', component: (resolve) => { require(['./views/UserFeedback.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户认证
  { path: '/user-verify', name: 'user-verify', component: (resolve) => { require(['./views/userVerify.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 消息详细
  { path: '/user-message-detail/:id', name: 'user-message-detail', component: (resolve) => { require(['./views/UserMessageDetail.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 用户钱包
  { path: '/user-wallet', name: 'user-wallet', component: (resolve) => { require(['./views/UserWallet.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 新浪用户中心
  { path: '/user-sina', name: 'user-sina', component: (resolve) => { require(['./views/iframe/UserSina.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 修改支付密码
  { path: '/user-edit-paypwd', name: 'user-edit-paypwd', component: (resolve) => { require(['./views/iframe/UserEditPaypwd.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 投资支付跳转
  { path: '/user-invest-pay/:sn', name: 'user-invest-pay', component: (resolve) => { require(['./views/iframe/Invest.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 充值支付跳转
  { path: '/user-recharge-pay/:sn', name: 'user-recharge-pay', component: (resolve) => { require(['./views/iframe/Recharge.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 提现支付跳转
  { path: '/user-withdraw-pay/:sn', name: 'user-withdraw-pay', component: (resolve) => { require(['./views/iframe/Withdraw.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 运营报告
  { path: '/operation-report', name: 'operation-report', component: (resolve) => { require(['./views/iframe/OperationReport.vue'], (resolve)) } },
  // 文章详细
  { path: '/article-detail/:id', name: 'article-detail', component: (resolve) => { require(['./views/ArticleDetail.vue'], (resolve)) } },
  // 文章分类列表
  { path: '/article-list/:cate', name: 'article-list', component: (resolve) => { require(['./views/ArticleList.vue'], (resolve)) } },
  // 理财师
  { path: '/planner', name: 'planner', component: (resolve) => { require(['./views/planner/Index.vue'], (resolve)) } },
  { path: '/planner-rule', name: 'planner-rule', component: (resolve) => { require(['./views/planner/Rule.vue'], (resolve)) }, meta: { requiresAuth: true } },
  { path: '/planner-apply', name: 'planner-apply', component: (resolve) => { require(['./views/planner/Apply.vue'], (resolve)) }, meta: { requiresAuth: true } },
  { path: '/planner-money', name: 'planner-money', component: (resolve) => { require(['./views/planner/Money.vue'], (resolve)) }, meta: { requiresAuth: true } },
  { path: '/planner-user', name: 'planner-user', component: (resolve) => { require(['./views/planner/User.vue'], (resolve)) }, meta: { requiresAuth: true } },
  // 活动页
  { path: '/activity', name: 'activity', component: (resolve) => { require(['./views/iframe/Activity.vue'], (resolve)) } },
  // 404
  { path: '*', name: '404', component (resolve) { require(['./views/NotFound.vue'], (resolve)) } },
  { path: '/404', name: 'not-found', component (resolve) { require(['./views/NotFound.vue'], (resolve)) } }
]

export default routes
