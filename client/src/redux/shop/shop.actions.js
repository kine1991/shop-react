import { shopTypes } from './shop.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase'

export const fetchCollectionsStart = () => ({
    type: shopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsComplete = (collectionMap) => ({
    type: shopTypes.FETCH_COLLECTIONS_COMPLETE,
    payload: collectionMap
})

export const fetchCollectionsFailure = (error) => ({
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())
        collectionRef.get()
        .then( snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsComplete(collectionMap))
        })
        .catch(error => {
            dispatch(fetchCollectionsFailure(error))
        })
    }   
}