import { createSelector } from 'reselect'

const selectUser = state => state.user



export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => {
        // console.log('user.currentUser')
        // console.log(user.currentUser)
        return user.currentUser
    }
)