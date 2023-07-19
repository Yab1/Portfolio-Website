import { Component } from "react";

export default class ContactSection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section id="contact" className="h-screen py-5">
        <title className="flex flex-col justify-center select-none border-2 w-screen">
          <span className="self-center font-body text-lg md:text-2xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            get in
            <span className="text-yellow-400 uppercase"> touch</span>
          </span>
          <span className="text-zinc-600 font-body text-3xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            contact
          </span>
        </title>
      </section>
    );
  }
}
