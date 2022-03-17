import './modalWilderUpdate.scss';

// Import Packages
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface WilderModel {
  _id: string;
  name: string;
  city: string;
  skills: SkillsModel[];
}
export interface SkillsModel {
  _id: string;
  title: string;
  votes: string;
}

interface Props {
  reveleWilderUpdate: boolean;
  toggleWilderUpdate: () => void;
  changeReveleWilderUpdate: (value: boolean) => void;
  currentWilder: WilderModel;
  setWilders: (wilders: []) => void;
}

const ModalWilderUpdate = ({
  reveleWilderUpdate,
  toggleWilderUpdate,
  changeReveleWilderUpdate,
  currentWilder,
  setWilders,
}: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [votes, setVotes] = useState('');

  useEffect(() => {
    if (currentWilder) {
      setName(currentWilder.name);
      setCity(currentWilder.city);
      setTitle(currentWilder.skills[0].title);
      setVotes(currentWilder.skills[0].votes);
    }
  }, [currentWilder]);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault();

      await axios.put(
        `http://localhost:3000/api/wilder/update/${currentWilder._id}`,
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
      const result = await axios.get('http://localhost:3000/api/wilder/read');

      setName('');
      setCity('');
      setTitle('');
      setVotes('');

      changeReveleWilderUpdate(!reveleWilderUpdate);
      setWilders(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {reveleWilderUpdate ? (
        <div className="overlayUpdate">
          <div className="wrapperUpdate">
            <div className="modaleUpdate">
              <div className="modaleTop">
                <span>Update Wilder</span>
                <button
                  type="submit"
                  className="close"
                  onClick={() => toggleWilderUpdate()}
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

export default ModalWilderUpdate;
