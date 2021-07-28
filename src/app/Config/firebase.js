import firebase from 'firebase/app';
//import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD9CSAS-ocMYj0mwQsbFycHB4IW9YKIXRk",
    authDomain: "crm-81dd2.firebaseapp.com",
    projectId: "crm-81dd2",
    storageBucket: "crm-81dd2.appspot.com",
    messagingSenderId: "304041092460",
    appId: "1:304041092460:web:c6d5ca7ad0e98ef22aff49"
};

export default firebase.initializeApp(firebaseConfig);