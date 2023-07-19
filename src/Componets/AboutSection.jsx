import { Component } from "react";
import { Download } from "react-bootstrap-icons";

export default class AboutSection extends Component {
  currentYear = new Date().getFullYear();
  constructor() {
    super();
  }
  render() {
    return (
      <section
        id="about"
        className="h-screen font-body py-5 px-5 md:px-10 lg:px-40"
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
        <div className="flex gap-20 my-10">
          {/* Personal Info Section  */}
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
        </div>
      </section>
    );
  }
}
// py-5 md:mx-10 lg:mx-40
