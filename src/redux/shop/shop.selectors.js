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
        return collections ? Object.keys(collections).map(key => {
            return collections[key]
        }) : []
    }
)

export const selectCollection = params => createSelector(
    [selectCollections],
    collections => {
        return collections ? collections[params] : null
    }
)


export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => {
        return shop.isFetching
    }
)


export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );