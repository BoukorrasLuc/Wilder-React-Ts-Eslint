import { useState } from 'react';

interface Logique {
  reveleWilderNew: boolean;
  reveleWilderUpdate: boolean;
  changeReveleWilderNew: (newReveleWilderNew: boolean) => void;
  changeReveleWilderUpdate: (newReveleWilderUpdate: boolean) => void;
  toggleWilderNew: () => void;
  toggleWilderUpdate: () => void;
}

const LogiqueModale = (): Logique => {
  const [reveleWilderNew, changeReveleWilderNew] = useState(false);
  const [reveleWilderUpdate, changeReveleWilderUpdate] = useState(false);

  function toggleWilderNew() {
    changeReveleWilderNew(!reveleWilderNew);
  }
  function toggleWilderUpdate() {
    changeReveleWilderUpdate(!reveleWilderUpdate);
  }

  return {
    reveleWilderNew,
    toggleWilderNew,
    changeReveleWilderNew,
    reveleWilderUpdate,
    toggleWilderUpdate,
    changeReveleWilderUpdate,
  };
};

export default LogiqueModale;
