const firebaseConfig = {
    apiKey: "AIzaSyB8RPf_A8_PM0TrzxLovC2e0qH-6euxdBE",
    authDomain: "twitter-clone-ea22b.firebaseapp.com",
    databaseURL: "https://twitter-clone-ea22b-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-ea22b",
    storageBucket: "twitter-clone-ea22b.appspot.com",
    messagingSenderId: "974165957178",
    appId: "1:974165957178:web:f8f2d722550fd4895e3303"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export default db;