import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/jeremiah-ojo-20a8a3213/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/jaydenhubb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/Da_sempere"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
}

export default Socials