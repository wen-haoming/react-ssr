import {getMovie} from '../../servers/request'

export const addCount = 'ADD_COUNT'
export const subCount = 'SUB_COUNT'

export const setDataArr = 'SET_DATA_ARR'

export const addCountAction = ()=>{
    return {
        type:addCount
    }
}

export const subCountAction = ()=>{
    return {
        type:subCount
    }
}

export const setDataArrAction = (data)=>{
    return {
        type:setDataArr,
        payload:data
    }
}

export const getMovieAction = (page = 1,limit=10)=>{
    return async (dispatch)=>{
        try{
            const resp =  await getMovie(page,limit)
            dispatch(setDataArrAction(resp.data.data))
        }catch(e){
            console.warn(e,'===')
        }
   
    }
}