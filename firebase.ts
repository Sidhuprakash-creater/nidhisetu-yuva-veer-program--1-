// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration from your project
const firebaseConfig = {
  apiKey: "AIzaSyBvpYS394RRkQlwexdV9aXh-drlBsHCeb8",
  authDomain: "nidhisetuambassedor.firebaseapp.com",
  projectId: "nidhisetuambassedor",
  storageBucket: "nidhisetuambassedor.appspot.com",
  messagingSenderId: "150262330840",
  appId: "1:150262330840:web:95e260e013c2e8125feead",
  measurementId: "G-BZTHRVCW27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Function to add a new ambassador document to the 'ambassadors' collection
const addAmbassador = async (data: object) => {
  try {
    const docRef = await addDoc(collection(db, "ambassadors"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    // Re-throw the error so it can be caught by the calling function
    throw e;
  }
};

export { db, addAmbassador };
