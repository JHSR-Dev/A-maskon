import { useEffect } from 'react';
import createMaskTable from '../firebase/firebaseMethods'


const LandingPage = () => {
  useEffect(()=>{
    createMaskTable()
  })
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default LandingPage;
