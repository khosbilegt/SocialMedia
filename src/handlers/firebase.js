import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore, getDocs, getDoc } from "firebase/firestore"; 

export const firebaseConfig = {
  apiKey: "AIzaSyAkpWH7F-Z6moRRyM3RrBLB913dOscmHus",
  authDomain: "sm-dev-e2940.firebaseapp.com",
  projectId: "sm-dev-e2940",
  storageBucket: "sm-dev-e2940.appspot.com",
  messagingSenderId: "728522542743",
  appId: "1:728522542743:web:e3ec98da2795ee4b82a3d2",
  measurementId: "G-69P22BWQHD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const actionCodeSettings = {
     // URL you want to redirect back to. The domain (www.example.com) for this
     // URL must be in the authorized domains list in the Firebase Console.
     url: 'https://www.example.com/finishSignUp?cartId=1234',
     // This must be true.
     handleCodeInApp: true,
     iOS: {
       bundleId: 'com.example.ios'
     },
     android: {
       packageName: 'com.example.android',
       installApp: true,
       minimumVersion: '12'
     },
     dynamicLinkDomain: 'example.page.link'
};

export async function getUserInfo() {
  const docRef = doc(db, "jqg6YLEeIRdnLsYc1QAOXnYiEjq2", "user_info");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getInfo() {
  const querySnapshot = await getDocs(collection(db, "jqg6YLEeIRdnLsYc1QAOXnYiEjq2"))
  querySnapshot.forEach((doc) => { 
    console.log(doc.id, " => " , doc.data())
  })
}