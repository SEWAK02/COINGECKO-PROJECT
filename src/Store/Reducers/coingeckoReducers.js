import { ActionType } from "../Actions/actionType";

const initialState ={
    loading : false,
    data : [ ],
    error : null
}

 export const coinReducer =(state= initialState,action )=>{
switch(action.type){
    case ActionType.GET_DATA:
        return{
           ...state,
           loading:true,
        };
        case ActionType.SUCCESS_DATA:
            return{
               ...state,
               loading:false,
               data : action.data,
               error:" ",
            };
            case ActionType.FAILED_DATA:
                return{
                   ...state,
                   loading:false,
                   data:[],
                   error : action.error
                };
                case ActionType.FILTER_DATA:
                    return {
                      ...state,
                      loading: false,
                      data: action.data,
                      error: " ",
                    };
                default:
                return state
}
}