import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDdVBwknKxUu6NsNGbYgnMa09mlvozBZRQ',
  authDomain: 'netflix-clone-4b911.firebaseapp.com',
  databaseURL: 'https://netflix-clone-4b911-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'netflix-clone-4b911',
  storageBucket: 'netflix-clone-4b911.appspot.com',
  messagingSenderId: '896252271122',
  appId: '1:896252271122:web:307968229ba11502ea96cb',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
