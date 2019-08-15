import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from './config-fitebase'



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
               displayName, 
               email,
               createdAt,
               ...additionalData 
            })
        } catch(err){
            console.log(err.message)
        }
    }   
    return userRef;
}

export const convertCollectionsSnapshotToMap =  data => {
    const transformedCollection = data.docs.map(item => {
        const {title, items } = item.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: item.id,
            title: title,
            items: items,
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {}); // arr -> map
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
};






firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;