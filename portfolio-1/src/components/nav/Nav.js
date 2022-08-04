import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsFillJournalBookmarkFill, BsTools} from "react-icons/bs";
import { BiMessageEdit } from "react-icons/bi";
const Nav = () => {

  const[activeClass, setActiveClass] =useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveClass("#")}
        className={activeClass === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveClass("#about")}
        className={activeClass === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveClass("#experiences")}
        className={activeClass === "#experiences" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveClass("#services")}
        className={activeClass === "#services" ? "active" : ""}
      >
        <BsTools />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveClass("#contact")}
        className={activeClass === "#contact" ? "active" : ""}
      >
        <BiMessageEdit />
      </a>
    </nav>
  );
}

export default Nav