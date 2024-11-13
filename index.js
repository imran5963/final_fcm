// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Register the service worker and get permission for notifications
async function initializeMessaging() {
    try {
        // Register the service worker for FCM
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        console.log('Service Worker registered with scope:', registration.scope);

        // Use this registration for Firebase Messaging
        messaging.useServiceWorker(registration);

        // Request permission to show notifications
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            throw new Error('Notification permission not granted');
        }

        // Get the FCM token
        const token = await messaging.getToken();
        console.log('FCM Token:', token);
        
        // Here you could send the token to your server if you need to store it
        return token;
    } catch (error) {
        console.error('Error getting FCM token:', error);
    }
}

// Call the function to initialize messaging
initializeMessaging();
