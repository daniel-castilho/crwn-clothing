import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDnsES3RSX0KUtFOpVJ77EWN2ygOavQgKI",
	authDomain: "crwn-db-xr3.firebaseapp.com",
	projectId: "crwn-db-xr3",
	storageBucket: "crwn-db-xr3.appspot.com",
	messagingSenderId: "43741711192",
	appId: "1:43741711192:web:3a5d9f33a053c834cf732d",
	measurementId: "G-5VDSWHB6WT",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
