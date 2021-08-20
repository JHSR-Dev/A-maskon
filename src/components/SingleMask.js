import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SingleMask = (props) => {
  const { mask } = props.location;
  const [singleMask, setSingleMask] = useState(mask);

  // useEffect(() => {
  //   setSingleMask(mask);
  // });

  console.log(singleMask);
  return (
    <div>
      {singleMask ? (
        <div>
          <img src={singleMask.imageUrl} alt='' />
          <div>{singleMask.name}</div>
          <div>{singleMask.price}</div>
          <div>{singleMask.description}</div>
        </div>
      ) : (
        <div> Nothing </div>
      )}
    </div>
  );
};

export default SingleMask;
