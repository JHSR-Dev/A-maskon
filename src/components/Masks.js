import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// import getMasks from '../firebase/firebaseMethods';

const Masks = () => {
  const [mask, setMask] = useState([]);

  useEffect(() => {
    async function getMasks() {
      try {
        const db = firebase.firestore();
        const maskCollectionRef = db.collection('masks');
        const maskSnapshot = await maskCollectionRef.get();
        let allMasks = [];

        await maskSnapshot.docs.map((doc) => allMasks.push(doc.data()));

        setMask(allMasks);
      } catch (err) {
        console.log(err);
      }
    }
    getMasks();
  });

  // console.log('this is mask', mask);

  return (
    <div>
      <h1>Masks will be here</h1>
      <div>
        {mask.map((maskObj) => {
          return (
            <div key={maskObj.id}>
              <img src={maskObj.imageUrl} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Masks;
