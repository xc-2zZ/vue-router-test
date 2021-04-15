import VueRouter from 'vue-router';
import test1 from '../components/test1'
import test2 from '../components/test2'
import swk from '../components/swk1'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test1/:id',
            component: test1,
            children: [
                {
                    path: '/test1/:id/swk1',
                    component: swk
                }
            ]
        },
        {
            path: '/',
            redirect: '/test1'
        },
        {
            path: '/test2',
            component: test2
        },
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next()
})
export default router