// Import Firebase scripts needed for messaging
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyBYMsIeus3BBBMddXS6icuzdI820l9KKKo",
      authDomain: "signalflarex.firebaseapp.com",
      projectId: "signalflarex",
      storageBucket: "signalflarex.firebasestorage.app",
      messagingSenderId: "839770373111",
      appId: "1:839770373111:web:074ef3a1b08e8ca7920cf2",
      measurementId: "G-MHHJZQBGMM"
});

// Initialize Firebase Messaging
const messaging = firebase.messaging();
