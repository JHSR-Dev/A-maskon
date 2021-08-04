import firebase from 'firebase/app';
import 'firebase/firestore';

// currently not used - created in comp -> masks
export default async function getMasks() {
  try {
    const db = firebase.firestore();
    const maskCollectionRef = db.collection('masks');
    const maskSnapshot = await maskCollectionRef.get();
    let allMasks = [];

    maskSnapshot.docs.map((doc) => allMasks.push(doc.data()));

    return allMasks;
  } catch (err) {
    console.log(err);
  }
}


