import { Component } from "react";
import {
  MapFill,
  EnvelopeOpenFill,
  TelephoneFill,
  Linkedin,
  Github,
  Telegram,
  Send,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";

export default class ContactSection extends Component {
  constructor() {
    super();
  }
  render() {
    const titleVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0.2,
        },
      },
    };
    const buttonVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#facc15",
        color: "black",
      },
    };
    return (
      <section
        id="contact"
        className="h-screen font-body py-5 px-5 md:px-10 lg:20 xl:px-40"
      >
        <motion.title
          className="flex flex-col justify-center select-none"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
        >
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            get in
            <span className="text-yellow-400 uppercase"> touch</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            contact
          </span>
        </motion.title>
        <section className="flex flex-col-reverse lg:flex-row gap-16 my-10">
          {/* Left Section */}
          <motion.section
            className="flex flex-col gap-5 lg:w-8/12"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.p className="uppercase text-white text-md lg:text-lg font-extrabold">
              Don't be shy !
            </motion.p>
            <p className="text-zinc-200 text-sm lg:text-md ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creating ideas, or exploring opportunities to be a
              part of your endeavors.
            </p>
            <div className="flex gap-5">
              <MapFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">Address point</p>
                <p className="text-white uppercase">
                  Koteba ,Addis Ababa ,Ethiopia
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <EnvelopeOpenFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">Mail me</p>
                <p className="text-white">yabilisanu@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5">
              <TelephoneFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">call me</p>
                <p className="text-white uppercase">+251931470920</p>
              </div>
            </div>
            <div className="flex gap-5 justify-evenly">
              <motion.div
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Linkedin size={20} />
              </motion.div>
              <motion.div
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Telegram size={20} />
              </motion.div>
              <motion.div
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Github size={20} />
              </motion.div>
            </div>
          </motion.section>
          {/* Right Section */}
          <form action="" className="flex flex-col gap-5 lg:gap-8 lg:w-11/12">
            <div className="flex flex-col lg:flex-row gap-5">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white flex-grow"
              />
              <input
                type="text"
                placeholder="YOUR EMAIL"
                className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white flex-grow"
              />
            </div>
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white"
            />
            <textarea
              name=""
              id=""
              cols="0"
              rows="5"
              placeholder="YOUR MESSAGE"
              className="bg-zinc-700 rounded px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white"
            ></textarea>
            <motion.div
              className="uppercase w-fit border-2 rounded-full pl-5 cursor-pointer text-white self-center transition ease-out duration-500"
              variants={buttonVariants}
              whileHover="hover"
            >
              Send message
              <button className="rounded-full bg-yellow-400 p-3 ml-3">
                <Send />
              </button>
            </motion.div>
          </form>
        </section>
      </section>
    );
  }
}
