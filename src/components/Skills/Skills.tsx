import './skills.scss';

import React from 'react';

interface SkillModels {
  _id: string;
  title: string;
  votes: string;
}

interface Props {
  skills: SkillModels[];
}

const Skills = ({ skills }: Props): JSX.Element => (
  <div className="skills">
    {skills.map((skill: SkillModels) => (
      <div className="skillsMap" key={skill._id}>
        <div className="title">{skill.title}</div>
        <div className="votes">{skill.votes}</div>
      </div>
    ))}
  </div>
);

export default Skills;
