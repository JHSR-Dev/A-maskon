import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SingleMask = (props) => {
  const { mask } = props;
  console.log('single mask props =>', props);

  return <div>Hello World </div>;
};

export default SingleMask;
