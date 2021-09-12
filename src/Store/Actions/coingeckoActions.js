import { ActionType } from './actionType';

 export const getData=(data)=>{
    return{
       type : ActionType.GET_DATA,
       payload : data,
    }
};

export const successData=(data)=>{
    return{
       type : ActionType.SUCCESS_DATA,
       payload : data,
    }
};

export const failedData=(error)=>{
    return{
       type : ActionType.FAILED_DATA,
       payload : error,
    }
};
export const filterData=(data)=>{
   return{
      type : ActionType.FILTER_DATA,
      payload : data,
   }
};

