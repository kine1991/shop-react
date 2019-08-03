import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections
    }
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collections => {
        return Object.keys(collections).map(key => {
            return collections[key]
        })
    }
)

export const selectCollection = params => createSelector(
    [selectCollections],
    collections => {
        return collections[params]
    }
)

