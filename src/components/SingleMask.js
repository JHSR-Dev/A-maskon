import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SingleMask = (props) => {
  const {mask} = props.location
  console.log('single mask props =>', mask);

  return (
    <div>
  <div>Hello World </div>
  <div>{mask.name}</div>
  <div>{mask.price}</div>
  <div>{mask.description}</div>
  </div>
  )
};

export default SingleMask;
