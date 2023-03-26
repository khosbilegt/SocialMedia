import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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