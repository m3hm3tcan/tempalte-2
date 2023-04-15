import React, { useState } from "react";
import { navigation } from "../data";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "scring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVarianst = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      <div
        className="cursor-pointer text-white"
        onClick={() => setIsOpen(true)}
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVarianst}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fidex top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          className="cursor-pointer absolute top-8 right-8"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="x-8 h-8" />
        </div>

        <div className="cursor-pointer absolute inline-block flex flex-col justify-center items-center top-24 right-24 min-width-42">
          
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8 capitalize">
                <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
        </div>

      </motion.ul>
    </nav>
  );
};

export default NavMobile;
