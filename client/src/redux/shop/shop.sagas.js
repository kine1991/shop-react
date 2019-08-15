import { all, call, put, takeLatest } from 'redux-saga/effects'

import { shopTypes } from './shop.types'
import { fetchCollectionsComplete, fetchCollectionsFailure } from './shop.actions'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase'

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield convertCollectionsSnapshotToMap(snapshot)
        yield put(fetchCollectionsComplete(collectionsMap))
    } catch(error){
        yield put(fetchCollectionsFailure(error))
    }
}


export function* fetchCollectionsStart(){
    yield takeLatest(
        shopTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}
