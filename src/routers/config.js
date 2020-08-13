import Home from '@/pages/Home'
import Admin from '@/pages/Admin'
import NotFound from '@/pages/NotFound'
import Base1 from '@/components/Base1'
import Base2 from '@/components/Base2'
import Detail1 from '@/components/Detail1'
import Detail2 from '@/components/Detail2'


export default [
    {
        key:'/home',
        path:'/',
        component:Home,
        routes:[
          {
            key:'/base1',
            path:'/home/base1',
            component:Base1,
          },
          {
            key:'/base2',
            path:'/home/base2',
            exact:true,
            component:Base2,
          }  
        ]
    },
    {
        key:'/admin',
        path:'/admin',
        exact:true,
        component:Admin,
        routes:[
            {
              key:'/detail1',
              path:'/admin/detail1',
              exact:true,
              component:Detail1,
            },
            {
              key:'/detail2',
              path:'/admin/detail2',
              exact:true,
              component:Detail2
            }  
          ]
    },
    {
        key:'/NotFound',
        component:NotFound
    }
]