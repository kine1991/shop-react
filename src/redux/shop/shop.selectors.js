import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections
    }
)

export const selectCollection = params => createSelector(
    [selectCollections],
    collections => {
        return collections.find(collection => {
            return collection.title.toLowerCase() === params
        })
    }
)

