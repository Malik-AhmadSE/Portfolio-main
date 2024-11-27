import React from 'react'
import { technologies } from '../constants'
import { Square } from './canvas';
import Wrapper from '../hoc/Wrapper';

const Hobby = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
    {technologies.map((tech, index) => (
  <div title={tech.name} className="w-36 h-36" key={index} >
   <Square text={tech.name}/>
   </div>
))}
</div>
  );
}

export default Wrapper(Hobby,"");
