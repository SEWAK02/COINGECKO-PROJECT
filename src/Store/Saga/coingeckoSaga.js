import getData from "../Services/getData";
import { call, put, takeEvery } from 'redux-saga/effects';

function fetchData(){
    return getData()
    .then((res)=>res)
    .catch((error)=>{
        throw error;
    })
}

function* getApi(){
    try{ const data = yield call(fetchData);
        yield put({type :'SUCCESS_DATA', data : data});

    }catch(e){
    yield put({type :'FAILED_DATA', message : e.message});
    }
}

function* myData(){
    yield takeEvery('GET_DATA',getApi);
}
 export default myData;