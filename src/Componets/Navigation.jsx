// React
import { Component } from "react";

// Bootstrap
import {
  HouseDoorFill,
  PersonFill,
  Briefcase,
  EnvelopeFill,
  Envelope,
} from "react-bootstrap-icons";

// Framer Motion
import { motion } from "framer-motion";

export default class Navigation extends Component {
  render() {
    const buttonVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#facc15",
        color: "black",
      },
    };
    return (
      <div className="flex justify-center flex-col align-center w-fit gap-5 md:fixed right-5 inset-y-0">
        <motion.a
          href="#home"
          className="bg-zinc-700 p-2 text-white rounded-full"
          variants={buttonVariants}
          whileHover="hover"
        >
          <HouseDoorFill size={15} />
        </motion.a>

        <motion.a
          href="#about"
          className="bg-zinc-700 p-2 text-white rounded-full"
          variants={buttonVariants}
          whileHover="hover"
        >
          <PersonFill size={15} />
        </motion.a>
        <motion.a
          href="#works"
          className="bg-zinc-700 p-2 text-white rounded-full"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Briefcase size={15} />
        </motion.a>

        <motion.a
          href="#contact"
          className="bg-zinc-700 p-2 text-white rounded-full"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Envelope size={15} />
        </motion.a>
      </div>
    );
  }
}
