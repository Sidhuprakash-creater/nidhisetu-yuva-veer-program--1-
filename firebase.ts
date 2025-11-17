// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
const auth = getAuth(app);
const REQUIRED_ADMIN_EMAIL = "nidhisetusaving@gmail.com";
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

const getAmbassadors = async () => {
  try {
    const q = query(collection(db, "ambassadors"), orderBy("submittedAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (e) {
    const snapshot = await getDocs(collection(db, "ambassadors"));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
};

const checkAmbassadorExists = async (email?: string, phone?: string) => {
  let emailExists = false;
  let phoneExists = false;
  if (email) {
    const qEmail = query(collection(db, "ambassadors"), where("email", "==", email), limit(1));
    const snapEmail = await getDocs(qEmail);
    emailExists = !snapEmail.empty;
  }
  if (phone) {
    const qPhone = query(collection(db, "ambassadors"), where("phone", "==", phone), limit(1));
    const snapPhone = await getDocs(qPhone);
    phoneExists = !snapPhone.empty;
  }
  return { emailExists, phoneExists };
};

const signInAdmin = async (email: string, password: string) => {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
};

const signOutAdmin = async () => {
  await signOut(auth);
};

const isAdmin = () => auth.currentUser?.email === REQUIRED_ADMIN_EMAIL;

export { db, addAmbassador, getAmbassadors, auth, signInAdmin, signOutAdmin, isAdmin, REQUIRED_ADMIN_EMAIL, checkAmbassadorExists };
