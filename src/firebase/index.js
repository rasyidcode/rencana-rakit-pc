import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4C0hNEK3tgE6bTD2VqY1u4VRtjj0HZV0",
    authDomain: "vuejspractice-e2169.firebaseapp.com",
    projectId: "vuejspractice-e2169",
    storageBucket: "vuejspractice-e2169.appspot.com",
    messagingSenderId: "431420928789",
    appId: "1:431420928789:web:1b161f009d3f9a58ebaf1c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore };
