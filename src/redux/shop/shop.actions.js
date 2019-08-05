import { shopTypes } from './shop.types'


export const updateCollections = (collectionsMap) => ({
    type: shopTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})
