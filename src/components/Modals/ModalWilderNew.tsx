import './modalWilderNew.scss';

// Import Packages
import React, { useState } from 'react';
import axios from 'axios';
import { WilderModel } from './ModalWilderUpdate';

interface Props {
  reveleWilderNew: boolean;
  toggleWilderNew: () => void;
  changeReveleWilderNew: (reveleWilderNew: boolean) => void;
  setWilders: (wilders: WilderModel[]) => void;
  wilders: WilderModel[];
}

const ModalWilderNew = ({
  reveleWilderNew,
  toggleWilderNew,
  changeReveleWilderNew,
  setWilders,
  wilders,
}: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [votes, setVotes] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        'http://localhost:3000/api/wilder/create',
        {
          name,
          city,
          skills: [
            {
              title,
              votes,
            },
          ],
        }
      );

      setName('');
      setCity('');
      setTitle('');
      setVotes('');
      changeReveleWilderNew(!reveleWilderNew);
      setWilders([...wilders, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {reveleWilderNew ? (
        <div className="overlayNew">
          <div className="wrapperNew">
            <div className="modaleNew">
              <div className="modaleTop">
                <span>Add Wilder</span>

                <button
                  type="button"
                  className="close"
                  onClick={() => toggleWilderNew()}
                >
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="addName">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="addCity">
                  <span>City</span>
                  <input
                    name="city"
                    type="text"
                    placeholder="Your City"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </div>
                <div className="addSkills">
                  <span>Skills</span>
                  <input
                    name="skills"
                    type="text"
                    placeholder="Your Skills"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="addVotes">
                  <span>Votes</span>
                  <input
                    name="votes"
                    type="number"
                    placeholder="Your Votes"
                    value={votes}
                    onChange={(event) => {
                      setVotes(event.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="buttonValider">
                  Valider
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWilderNew;
