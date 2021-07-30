import firebase from 'firebase/app'


export default async function createMaskTable() {
    try {
      const db = firebase.firestore();
      await db
        .collection("masks")
        .doc('secondMask')
        .set({
           price: 20,
           type: 'creative'
         });
    } catch (err) {
      console.log("There is something wrong!!!!");
    }
  }