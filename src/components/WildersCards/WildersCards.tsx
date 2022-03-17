import './wildersCards.scss';

// Packages
import axios from 'axios';
import React from 'react';

// Image
import Avatar from '../../Asset/Avatar.png';

// Components
import Skills from '../Skills/Skills';
import { WilderModel } from '../Modals/ModalWilderUpdate';

interface Props {
  wilder: WilderModel;
  setWilders: (wilders: []) => void;
  setCurrentWilder: (wilder: WilderModel) => void;
  toggleWilderUpdate: () => void;
}

const WildersCards = ({
  wilder,
  setWilders,
  setCurrentWilder,
  toggleWilderUpdate,
}: Props): JSX.Element => {
  const deleteWilder = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/wilder/delete/${wilder._id}`
      );

      const result = await axios.get('http://localhost:3000/api/wilder/read');

      setWilders(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerWildersCards">
      <div className="wildersCards">
        <div className="wildersCardsTop">
          <img src={Avatar} alt={Avatar} />

          <button
            type="submit"
            onClick={() => {
              deleteWilder();
            }}
          >
            X
          </button>
        </div>

        <h1>{wilder.name}</h1>
        <h1>{wilder.city}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni
          quisquam nesciunt incidunt deleniti dolore voluptas assumenda
          temporibus enim eum autem, expedita pariatur sit ut rem rerum
          laboriosam neque itaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam magni quisquam nesciunt incidunt deleniti dolore
          voluptas assumenda temporibus enim eum autem, expedita pariatur sit ut
          rem rerum laboriosam neque itaque!
        </p>
        <h2>Wild Skills</h2>
        <Skills skills={wilder.skills} />
        <button
          type="submit"
          onClick={() => {
            setCurrentWilder(wilder);
            toggleWilderUpdate();
          }}
        >
          update Wilder
        </button>
      </div>
    </div>
  );
};

export default WildersCards;
