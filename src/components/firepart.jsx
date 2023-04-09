// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp(
   {
  apiKey: "AIzaSyBrSM0YEWSsPLanhFp0Fy7sIv4mNNFfXmY",
  authDomain: "hotelproject-a715b.firebaseapp.com",
  databaseURL: "https://hotelproject-a715b-default-rtdb.firebaseio.com",
  projectId: "hotelproject-a715b",
  storageBucket: "hotelproject-a715b.appspot.com",
  messagingSenderId: "369644204129",
  appId: "1:369644204129:web:78956e1b75fb0e349dfa20"
}
);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export { firebase, db,auth, storage};

// import firebase from "firebase";

// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// import {getStorage} from "firebase/storage";
// import {getAuth} from "firebase/auth"



// const firebaseConfig = {
//   apiKey: "AIzaSyBrSM0YEWSsPLanhFp0Fy7sIv4mNNFfXmY",
//   authDomain: "hotelproject-a715b.firebaseapp.com",
//   databaseURL: "https://hotelproject-a715b-default-rtdb.firebaseio.com",
//   projectId: "hotelproject-a715b",
//   storageBucket: "hotelproject-a715b.appspot.com",
//   messagingSenderId: "369644204129",
//   appId: "1:369644204129:web:78956e1b75fb0e349dfa20"
// };


// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const db=getFirestore(app);
// const storage=getStorage(app);

// export {auth,db,storage };
