import {addCount,subCount,setDataArr} from '../actions'

const initialState = {
    num:0,
    dataArr:[]
}

export default function(state = initialState,payload){
        switch(payload.type){
           case addCount:
             return  {...state,num:state.num + 1}
           case subCount:
            return {...state,num:state.num - 1}
            case setDataArr:
             return {...state,dataArr:payload.payload}
            default:
               return  state
        }
}