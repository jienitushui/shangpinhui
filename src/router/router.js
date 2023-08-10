import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/home';
import Login from '@/pages/login';
import Search from '@/pages/search';
import Register from '@/pages/register';


// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { showFooter: true }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: { showFooter: true },
            name: 'search',
        },
        {
            path: '/login',
            component: Login,
            meta: { showFooter: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { showFooter: false }
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})