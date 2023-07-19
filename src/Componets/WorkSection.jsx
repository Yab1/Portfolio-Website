import { Component } from "react";

export default class WorkSection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section
        id="about"
        className="h-screen font-body py-5 px-5 md:px-10 lg:px-40 "
      >
        <title className="flex flex-col justify-center select-none">
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            Latest
            <span className="text-yellow-400 uppercase"> Works</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            portfolio
          </span>
        </title>
        <section className="flex w-full justify-between gap-28 my-10">
          <section className="flex flex-col w-full justify-center ">
            {/* Website-One */}
            <div className="w-full h-80 bg-zinc-900 rounded p-10">
              <div className="flex justify-between">
                <p className="capitalize text-white text-lg ">name</p>
                <div className="flex justify-center align-center gap-3 uppercase">
                  <p className="text-zinc-400 rounded px-3 bg-zinc-700 w-fit ">
                    React
                  </p>
                  <p className="text-zinc-400 rounded px-3 bg-zinc-700 w-fit">
                    mui
                  </p>
                </div>
              </div>
            </div>
            <section className="mt-20 ml-16">
              <button
                href=""
                className="text-yellow-400 uppercase font-bold font-md underline tracking-widest"
              >
                All projects
              </button>
            </section>
          </section>
          <section className="flex flex-col gap-10 w-full ">
            {/* Website-Two */}
            <div className="w-full h-80 bg-zinc-700 rounded p-10">
              <div className="flex justify-between">
                <p className="capitalize text-white text-lg ">name</p>
                <div className="flex justify-center align-center gap-3 uppercase">
                  <p className="text-zinc-400 rounded px-3 bg-zinc-800 w-fit ">
                    React
                  </p>
                  <p className="text-zinc-400 rounded px-3 bg-zinc-800 w-fit">
                    mui
                  </p>
                </div>
              </div>
            </div>
            {/* Website-Three */}
            <div className="w-full h-80 bg-yellow-500 rounded p-10">
              <div className="flex justify-between">
                <p className="capitalize text-white text-lg ">name</p>
                <div className="flex justify-center align-center gap-3 uppercase">
                  <p className="text-zinc-400 rounded px-3 bg-zinc-700 w-fit ">
                    React
                  </p>
                  <p className="text-zinc-400 rounded px-3 bg-zinc-700 w-fit">
                    mui
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
