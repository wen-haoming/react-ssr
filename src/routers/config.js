import Home from '@/pages/Home'
import Admin from '@/pages/Admin'
import NotFound from '@/pages/NotFound'

export default [
    {
        key:'/home',
        path:'/',
        exact:true,
        component:Home
    },
    {
        key:'/admin',
        path:'/admin',
        exact:true,
        component:Admin
    },
    {
        key:'/NotFound',
        component:NotFound
    }
]