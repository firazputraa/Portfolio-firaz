import { Link } from 'react-router-dom';
import React from 'react';

const ProjectCard = ({ image, title}) => {
  return (
    <Link to={"/detail"}  className='hover:scale-105 transition-transform duration-300 ease-in-out'>
    <div className="max-w-sm border rounded-lg border-sky-700 shadow-2xl h-full">
      <div className="p-1">
          <img className="rounded-t-lg w-full h-auto text-sky-100 block" src={image} alt={title} />
          <h4 className="text-base md:text-lg lg:text-xl font-bold tracking-tight text-sky-900">
            {title}
          </h4>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;