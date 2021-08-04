import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "./Masks.css";

// import getMasks from '../firebase/firebaseMethods';

const Masks = () => {
  const [mask, setMask] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("masks").onSnapshot((doc) => {
      let allMasks = [];
      doc.docs.map((mask) => allMasks.push(mask.data()));
      setMask(allMasks);
    });

    return () => unsubscribe();
  }, []);

  console.log('this is mask', mask);

  return (
    <div>
      <h1>Masks</h1>
      <div className="allMasks">
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
