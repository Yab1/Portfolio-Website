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

export default class ContactSection extends Component {
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
            get in
            <span className="text-yellow-400 uppercase"> touch</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            contact
          </span>
        </title>
        <section className="flex gap-16 my-10">
          {/* Left Section */}
          <section className="flex flex-col gap-5 w-8/12">
            <p className="uppercase text-white text-md lg:text-lg font-extrabold">
              Don't be shy !
            </p>
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
            <div className="flex gap-5">
              <div className="p-3 text-white bg-zinc-700 w-fit rounded-full hover:bg-yellow-400 active:bg-yellow-400">
                <Linkedin size={20} />
              </div>
              <div className="p-3 text-white bg-zinc-700 w-fit rounded-full hover:bg-yellow-400 active:bg-yellow-400">
                <Telegram size={20} />
              </div>
              <div className="p-3 text-white bg-zinc-700 w-fit rounded-full hover:bg-yellow-400 active:bg-yellow-400">
                <Github size={20} />
              </div>
            </div>
          </section>
          {/* Right Section */}
          <form action="" className="flex flex-col gap-8 w-11/12">
            <div className="flex gap-5">
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
            <div className="uppercase w-fit border-2 rounded-full pl-5 hover:bg-yellow-400 hover:text-black cursor-pointer text-white">
              Send message
              <button className="rounded-full bg-yellow-400 p-3 ml-3">
                <Send />
              </button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
