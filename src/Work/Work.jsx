import React from "react";

const Work = ({ pname, pdes, pstack, plive, psource }) => {
  return (
    <>
      <div className="wcard" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150" >
        <h4 className="title">{pname}</h4>
        <p>{pdes}</p>
        <p className="tstack">Techstack:</p>
        <p className="stack">{pstack}</p>
        <div className="wlink">
          <a target='_blank' rel="noreferrer" href={plive}>Live</a>
          <a target='_blank' rel="noreferrer" href={psource}>Source Code</a>
        </div>
      </div>
    </>
  );
};

export default Work;
