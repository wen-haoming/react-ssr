import instance from './server'

export const getMovie = (page = 1, limit = 10)=>{
   return instance.get('/api/movie',{
       params:{
        page , limit
       }
   })
}