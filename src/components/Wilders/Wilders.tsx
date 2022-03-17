import './wilders.scss';

// Packages
import React, { useState, useEffect } from 'react';

// Components
import WildersCards from '../WildersCards/WildersCards';
import LogiqueModale from '../Modals/LogiqueModal';
import ModalWilderNew from '../Modals/ModalWilderNew';
import ModalWilderUpdate, { WilderModel } from '../Modals/ModalWilderUpdate';

interface Props {
  wilders: WilderModel[];
  setWilders: (wilders: WilderModel[]) => void;
}

const Wilders = ({ wilders, setWilders }: Props): JSX.Element => {
  const [currentWilder, setCurrentWilder] = useState(null);

  useEffect(() => {}, [currentWilder]);

  const {
    reveleWilderNew,
    toggleWilderNew,
    changeReveleWilderNew,
    reveleWilderUpdate,
    toggleWilderUpdate,
    changeReveleWilderUpdate,
  } = LogiqueModale();

  return (
    <div className="wilders">
      <div className="titleButton">
        <h1>Wilders</h1>
        <button type="submit" onClick={toggleWilderNew}>
          Add Wilder
        </button>
      </div>

      <ModalWilderNew
        reveleWilderNew={reveleWilderNew}
        toggleWilderNew={toggleWilderNew}
        changeReveleWilderNew={changeReveleWilderNew}
        setWilders={setWilders}
        wilders={wilders}
      />

      <ModalWilderUpdate
        reveleWilderUpdate={reveleWilderUpdate}
        toggleWilderUpdate={toggleWilderUpdate}
        changeReveleWilderUpdate={changeReveleWilderUpdate}
        currentWilder={currentWilder}
        setWilders={setWilders}
      />

      <div className="cards">
        {wilders.map((wilder) => (
          <div key={wilder._id}>
            <WildersCards
              wilder={wilder}
              setWilders={setWilders}
              setCurrentWilder={setCurrentWilder}
              toggleWilderUpdate={toggleWilderUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wilders;
