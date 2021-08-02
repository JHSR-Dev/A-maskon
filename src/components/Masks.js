import { useEffect } from 'react';

import getMasks from '../firebase/firebaseMethods';

const Masks = () => {
  useEffect(() => {
    getMasks();
  });
  return (
    <div>
      <h1>Masks will be here</h1>
    </div>
  );
};

export default Masks;
