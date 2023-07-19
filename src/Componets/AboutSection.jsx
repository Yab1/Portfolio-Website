import { Component } from "react";
import { Download, ArchiveFill, BookHalf } from "react-bootstrap-icons";

export default class AboutSection extends Component {
  currentYear = new Date().getFullYear();
  constructor() {
    super();
  }
  render() {
    return (
      <section
        id="about"
        className="h-fit font-body py-5 px-5 md:px-10 lg:px-40"
      >
        <title className="flex flex-col justify-center select-none">
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            About
            <span className="text-yellow-400 uppercase"> me</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            Resume
          </span>
        </title>
        {/* Personal Info Section  */}
        <section className="flex gap-20 my-10">
          {/* Information */}
          <section className="flex flex-col gap-10 w-2/4">
            <p className="uppercase text-white text-md lg:text-lg font-extrabold mt-10">
              Personal Infos
            </p>
            <div className="flex gap-20 ">
              {/* Personal Info Section - Left Side */}
              <div className="flex flex-col gap-3">
                <p className="text-zinc-500">
                  First Name:{" "}
                  <span className="text-white block md:inline">Yeabsera</span>
                </p>
                <p className="text-zinc-500">
                  Age:
                  <span className="text-white"> {this.currentYear - 2000}</span>
                </p>
                <p className="text-zinc-500">
                  Freelance:{" "}
                  <span className="text-white block md:inline">Available</span>
                </p>
                <p className="text-zinc-500">
                  Phone:{" "}
                  <span className="text-white block md:inline">
                    +251931470920
                  </span>
                </p>
                <p className="text-zinc-500">
                  Skype: <span className="text-white">xyz_abc</span>
                </p>
              </div>
              {/* Personal Info Section - Right Side */}
              <div className="flex flex-col gap-3">
                <p className="text-zinc-500">
                  Last Name:{" "}
                  <span className="text-white block md:inline">Lisanework</span>
                </p>
                <p className="text-zinc-500">
                  Nationality:{" "}
                  <span className="text-white block md:inline">Ethiopian</span>
                </p>
                <p className="text-zinc-500">
                  Address:{" "}
                  <span className="text-white block md:inline">
                    Addis Ababa
                  </span>
                </p>
                <p className="text-zinc-500">
                  Email:{" "}
                  <span className="text-white block md:inline">
                    yabilisanu@gmail.com
                  </span>
                </p>
                <p className="text-zinc-500">
                  Language:{" "}
                  <span className="text-white block md:inline">
                    Amharic, English
                  </span>
                </p>
              </div>
            </div>
            {/* Download CV */}
            <div className="uppercase w-fit border-2 rounded-full pl-5 hover:bg-yellow-400 hover:text-black cursor-pointer text-white">
              download cv
              <button className="rounded-full bg-yellow-400 p-3 ml-3">
                <Download />
              </button>
            </div>
          </section>
          {/* Card Section */}
          <section className="flex gap-10 mt-10 w-2/4 flex-wrap cursor-default">
            {/* Card One */}
            <div className="border-4 h-fit w-full lg:w-2/6 border-zinc-700 p-5">
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
            </div>
            {/* Card Two */}
            <div className="border-4 h-fit w-full lg:w-2/6 border-zinc-700 p-5">
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
            </div>
            {/* Card Three */}
            <div className="border-4 h-fit w-full lg:w-2/6 border-zinc-700 p-5">
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
            </div>
            {/* Card Four */}
            <div className="border-4 h-fit w-full lg:w-2/6 border-zinc-700 p-5">
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
            </div>
          </section>
        </section>
        {/* Skills Section */}
        <section className="flex flex-col items-center my-20">
          <p className="uppercase text-white text-md lg:text-lg font-extrabold mb-10">
            my skills
          </p>
          <div className="self-center grid grid-cols-2 lg:grid-cols-4 gap-x-40 gap-y-16">
            {/* HTML */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 216deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">60%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">html</p>
            </div>
            {/* CSS */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 270deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">75%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">css</p>
            </div>
            {/* JAVASCRIPT */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">
                JAVASCRIPT
              </p>
            </div>
            {/* REACT */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">
                React
              </p>
            </div>
            {/* MUI */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 324deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">90%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">mui</p>
            </div>
            {/* SCSS */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 288deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">80%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">scss</p>
            </div>
            {/* TAILWIND */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 324deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">90%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">
                tailwind
              </p>
            </div>
            {/* BOOTSTRAP */}
            <div className="flex items-center flex-col gap-5 w-fit">
              <div
                className="h-24 w-24 rounded-full flex justify-center items-center"
                style={{
                  background: "conic-gradient(#facc15 252deg, #52525b 0deg )",
                }}
              >
                <div className="h-20 w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                  <p className="text-white font-bold font-lg">70%</p>
                </div>
              </div>
              <p className="uppercase text-white font-md font-semibold">
                Bootstrap
              </p>
            </div>
          </div>
        </section>
        {/* Experience and Education */}
        <section className="flex flex-col items-center my-20">
          <p className="uppercase text-white text-md lg:text-lg font-extrabold mb-10">
            Experience & Education
          </p>
          <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
            {/* Left Side */}
            <div className="flex flex-col gap-16 gap-16">
              {/* Hello Cash */}
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <ArchiveFill />
                  </div>
                  <span className="border-l-2 h-20 border-zinc-600"></span>
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <p className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit">
                    July 2018 – August 2018
                  </p>
                  <p className="uppercase text-white text-md font-medium">
                    Sales and On-boarding Specialist
                    <span className="text-zinc-400"> - Hello Cash</span>
                  </p>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </p>
                </div>
              </div>
              {/* Marakisoft */}
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <ArchiveFill />
                  </div>
                  <span className="border-l-2 h-20 border-zinc-600"></span>
                </div>
                <div className=" flex flex-col gap-3 ml-5">
                  <p className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit">
                    June 2021 – September 2021
                  </p>
                  <p className="uppercase text-white text-md font-medium">
                    Front End Developer
                    <span className="text-zinc-400">
                      {" "}
                      - Marakisoft Technologies
                    </span>
                  </p>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <aside className="flex flex-col gap-16">
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <BookHalf />
                  </div>
                  <span className="border-l-2 h-24 border-zinc-600"></span>
                </div>
                <div className=" flex flex-col gap-3 ml-5">
                  <p className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit">
                    2023
                  </p>
                  <p className="uppercase text-white text-md font-medium">
                    Computer Science and Engineering Degree
                    <span className="text-zinc-400">
                      {" "}
                      - Adama Science and Technology University
                    </span>
                  </p>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className=" flex flex-col items-center">
                  <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                    <BookHalf />
                  </div>
                  <span className="border-l-2 h-24 border-zinc-600"></span>
                </div>
                <div className=" flex flex-col gap-3 ml-5">
                  <p className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit">
                    2023
                  </p>
                  <p className="uppercase text-white text-md font-medium">
                    Software Engineering Certificate
                    <span className="text-zinc-400">
                      {" "}
                      - The ALX Holberton Software Engineering
                    </span>
                  </p>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae facilis vitae numquam illum cupiditate culpa
                    optio modi soluta fugiat! Culpa.
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </section>
      </section>
    );
  }
}
// py-5 md:mx-10 lg:mx-40
