import { all } from "@redux-saga/core/effects";
import myData from "./coingeckoSaga";

export default function* rootSaga(){
    yield all([
        myData(),
    ]

    )
}
