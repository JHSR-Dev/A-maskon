import firebase from 'firebase/app';
import 'firebase/firestore';

export default async function getMasks() {
  try {
    const db = firebase.firestore();
    const firstMaskRef = db.collection('masks').doc('firstMask');
    const firstMaskDoc = await firstMaskRef.get();

    if (!firstMaskDoc.exists) {
      console.log('Nothing like this exists');
    } else {
      console.log('Document data: ', firstMaskDoc.data());
    }
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
