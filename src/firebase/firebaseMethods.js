import firebase from 'firebase/app';
import 'firebase/firestore';

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

/*

var docRef = db.collection("cities").doc("SF");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

*/
