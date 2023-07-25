import { Component } from "react";
import { Download, ArchiveFill, BookHalf } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export default class AboutSection extends Component {
  currentYear = new Date().getFullYear();
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
    const containerVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
    };
    const childVariants = {
      hidden: {
        opacity: 0,
        x: -250,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.4,
          damping: 8,
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
    const cardVariants = {
      visible: {
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      },
    };
    return (
      <motion.section
        id="about"
        className="h-fit font-body py-5 px-5 md:px-10 lg:20 xl:px-40"
      >
        <motion.title
          className="flex flex-col justify-center select-none"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
        >
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            About
            <span className="text-yellow-400 uppercase"> me</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            Resume
          </span>
        </motion.title>
        {/* Personal Info Section  */}
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-15 my-16">
          {/* Information */}
          <section className="flex flex-col gap-5 md:w-full">
            <p className="uppercase text-white text-md lg:text-lg font-extrabold">
              Personal Infos
            </p>
            <motion.div
              className="flex gap-8 md:gap-10 xl:gap-15"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* Personal Info Section - Left Side */}
              <motion.div
                className="flex flex-col gap-3 w-full"
                variants={childVariants}
              >
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  First Name:<span className="text-white"> Yeabsera</span>
                </p>
                <p className="text-zinc-500">
                  Age:
                  <span className="text-white"> {this.currentYear - 2000}</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Freelance: <span className="text-white">Available</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Phone: <span className="text-white ">+251931470920</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Email:{" "}
                  <span className="text-white">yabilisanu@gmail.com</span>
                </p>
              </motion.div>
              {/* Personal Info Section - Right Side */}
              <motion.div
                className="flex flex-col gap-3 w-full"
                variants={childVariants}
              >
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Last Name: <span className="text-white">Lisanework</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Nationality: <span className="text-white">Ethiopian</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Address: <span className="text-white">Addis Ababa</span>
                </p>
                <p className="text-zinc-500 flex gap-1 flex-wrap">
                  Language: <span className="text-white">Amharic, English</span>
                </p>
              </motion.div>
            </motion.div>
            {/* Download CV */}
            <motion.div
              className="uppercase self-center lg:self-start w-fit border-2 rounded-full pl-5 cursor-pointer text-white xl:mt-10 transition ease-out duration-500"
              variants={buttonVariants}
              whileHover="hover"
            >
              download cv
              <motion.button
                className="rounded-full bg-yellow-400 p-3 ml-3"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Download />
              </motion.button>
            </motion.div>
          </section>
          {/* Card Section */}
          <motion.section
            className="grid grid-cols-2 gap-5 md:gap-10 lg:w-full mt-10 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Card One */}
            <motion.div
              className="border-4 h-fit border-zinc-700 p-3 md:p-5 lg:p-2 xl:p-10"
              variants={cardVariants}
            >
              <p className="text-yellow-400 text-5xl font-bold flex">
                3<span className="text-xl">+</span>
              </p>
              <div className="flex">
                <p className="text-yellow-400 self-start relative bottom-2">
                  ____
                </p>
                <div className="text-white ml-2 capitalize">
                  <p className="items-center"> Years of</p>
                  <p>Experience</p>
                </div>
              </div>
            </motion.div>
            {/* Card Two */}
            <motion.div
              className="border-4 h-fit border-zinc-700 p-3 md:p-5 lg:p-2 xl:p-10"
              variants={cardVariants}
            >
              <p className="text-yellow-400 text-5xl font-bold flex">
                10<span className="text-xl">+</span>
              </p>
              <div className="flex">
                <p className="text-yellow-400 self-start relative bottom-2">
                  ____
                </p>
                <div className="text-white ml-2 capitalize">
                  <p className="items-center"> completed</p>
                  <p>projects</p>
                </div>
              </div>
            </motion.div>
            {/* Card Three */}
            <motion.div
              className="border-4 h-fit border-zinc-700 p-3 md:p-5 lg:p-2 xl:p-10"
              variants={cardVariants}
            >
              <p className="text-yellow-400 text-5xl font-bold flex">
                5<span className="text-xl">+</span>
              </p>
              <div className="flex">
                <p className="text-yellow-400 self-start relative bottom-2">
                  ____
                </p>
                <div className="text-white ml-2 capitalize">
                  <p className="items-center"> Certificates</p>
                  <p>credentials</p>
                </div>
              </div>
            </motion.div>
            {/* Card Four */}
            <motion.div
              className="border-4 h-fit border-zinc-700 p-3 md:p-5 lg:p-2 xl:p-10"
              variants={cardVariants}
            >
              <p className="text-yellow-400 text-5xl font-bold flex">
                15<span className="text-xl">+</span>
              </p>
              <div className="flex">
                <p className="text-yellow-400 self-start relative bottom-2">
                  ____
                </p>
                <div className="text-white ml-2 capitalize">
                  <p className="items-center"> Awards</p>
                  <p>Won</p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </section>
        {/* Skills Section */}
        <section className="flex flex-col gap-10 items-center">
          <motion.p
            className="uppercase text-white text-lg lg:text-lg font-extrabold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
          >
            my skills
          </motion.p>
          <motion.div
            className="self-center grid grid-cols-3 md:grid-cols-4 gap-x-10 md:gap-x-40 gap-y-8 md:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* HTML */}
            <div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <motion.div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 216deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">60%</p>
                </div>
              </motion.div>
              <p className="uppercase text-white text-xs md:text-base">html</p>
            </div>
            {/* CSS */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 270deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">75%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">css</p>
            </motion.div>
            {/* JAVASCRIPT */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">
                JAVASCRIPT
              </p>
            </motion.div>
            {/* REACT */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">React</p>
            </motion.div>
            {/* MUI */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 324deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">90%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">mui</p>
            </motion.div>
            {/* BOOTSTRAP */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 252deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">70%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">
                Bootstrap
              </p>
            </motion.div>
            {/* SCSS */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">scss</p>
            </motion.div>
            {/* TAILWIND */}
            <motion.div
              className="flex items-center flex-col gap-2 md:gap-5"
              variants={childVariants}
            >
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 324deg, #52525b 0deg )",
                }}
              >
                <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white md:font-bold md:font-lg">90%</p>
                </div>
              </div>
              <p className="uppercase text-white text-xs md:text-base">
                tailwind
              </p>
            </motion.div>
          </motion.div>
        </section>
        {/* Experience and Education */}
        <section className="flex flex-col items-center my-16">
          <motion.p
            className="uppercase text-white text-lg lg:text-lg font-extrabold mb-10"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
          >
            Experience & Education
          </motion.p>
          <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 lg:gap-y-0">
            {/* Experience Side */}
            <aside className="flex flex-col gap-8 lg:gap-28">
              {/* Hello Cash */}
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <ArchiveFill />
                  </div>
                  <span className="border-l-2 h-full border-zinc-600"></span>
                </div>
                <motion.div
                  className="flex flex-col gap-3 ml-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.p
                    className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                    variants={childVariants}
                  >
                    July 2018 – Aug 2018
                  </motion.p>
                  <motion.p
                    className="uppercase text-white text-md font-medium"
                    variants={childVariants}
                  >
                    Sales and On-boarding Specialist
                    <span className="text-zinc-400"> - Hello Cash</span>
                  </motion.p>
                  <motion.p className="text-zinc-400" variants={childVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </motion.p>
                </motion.div>
              </div>
              {/* Marakisoft */}
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <ArchiveFill />
                  </div>
                  <div></div> <div></div>
                  <span className="border-l-2 h-full border-zinc-600"></span>
                </div>
                <motion.div
                  className=" flex flex-col gap-3 ml-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.p
                    className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                    variants={childVariants}
                  >
                    June 2021 – Sep 2021
                  </motion.p>
                  <motion.p
                    className="uppercase text-white text-md font-medium"
                    variants={childVariants}
                  >
                    Front End Developer
                    <span className="text-zinc-400">
                      {" "}
                      - Marakisoft Technologies
                    </span>
                  </motion.p>
                  <motion.p className="text-zinc-400" variants={childVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </motion.p>
                </motion.div>
              </div>
            </aside>
            {/* Education Side */}
            <aside className="flex flex-col gap-8 lg:gap-16">
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <BookHalf />
                  </div>
                  <span className="border-l-2 h-full border-zinc-600"></span>
                </div>
                <motion.div
                  className=" flex flex-col gap-3 ml-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.p
                    className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                    variants={childVariants}
                  >
                    2023
                  </motion.p>
                  <motion.p
                    className="uppercase text-white text-md font-medium"
                    variants={childVariants}
                  >
                    Computer Science and Engineering Degree
                    <span className="text-zinc-400">
                      {" "}
                      - Adama Science and Technology University
                    </span>
                  </motion.p>
                  <motion.p className="text-zinc-400" variants={childVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </motion.p>
                </motion.div>
              </div>
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <BookHalf />
                  </div>
                  <span className="border-l-2 h-full border-zinc-600"></span>
                </div>
                <motion.div
                  className=" flex flex-col gap-3 ml-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.p
                    className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                    variants={childVariants}
                  >
                    2023
                  </motion.p>
                  <motion.p
                    className="uppercase text-white text-md font-medium"
                    variants={childVariants}
                  >
                    Software Engineering Certificate
                    <span className="text-zinc-400">
                      {" "}
                      - The ALX Holberton Software Engineering
                    </span>
                  </motion.p>
                  <motion.p className="text-zinc-400" variants={childVariants}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </motion.p>
                </motion.div>
              </div>
            </aside>
          </section>
        </section>
      </motion.section>
    );
  }
}
// py-5 md:mx-10 lg:mx-40
