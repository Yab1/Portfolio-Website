import { Component } from "react";

export default class WorkSection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section
        id="about"
        className="h-fit font-body py-5 px-5 md:px-10 lg:20 xl:px-40"
      >
        <title className="flex flex-col justify-center select-none">
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            Latest
            <span className="text-yellow-400 uppercase"> Works</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wide uppercase z-0 ">
            portfolio
          </span>
        </title>
        <section className="flex flex-col md:flex-row gap-5 mt-10">
          {/* Card-One */}
          <div className="w-full h-40 lg:h-80 bg-zinc-900 rounded p-3">
            <div className="flex justify-between">
              <p className="capitalize text-white text-md">name</p>
              <div className="flex justify-center align-center gap-3 uppercase">
                <p className="text-zinc-400 bg-zinc-700 w-fit h-fit text-sm rounded p-1">
                  React
                </p>
                <p className="text-zinc-400 bg-zinc-700 w-fit h-fit text-sm rounded p-1">
                  mui
                </p>
              </div>
            </div>
          </div>
          {/* Card-Two */}
          <div className="w-full h-40 lg:h-80 bg-zinc-700 rounded p-3">
            <div className="flex justify-between">
              <p className="capitalize text-white text-md">name</p>
              <div className="flex justify-center align-center gap-3 uppercase">
                <p className="text-zinc-400 bg-zinc-800 w-fit h-fit text-sm rounded p-1">
                  React
                </p>
                <p className="text-zinc-400 bg-zinc-800 w-fit h-fit text-sm rounded p-1">
                  mui
                </p>
              </div>
            </div>
          </div>
          {/* Card-Three */}
          <div className="w-full h-40 lg:h-80 bg-yellow-400 rounded p-3">
            <div className="flex justify-between">
              <p className="capitalize text-black text-md">name</p>
              <div className="flex justify-center align-center gap-3 uppercase">
                <p className="text-zinc-400 bg-zinc-700 w-fit h-fit text-sm rounded p-1">
                  React
                </p>
                <p className="text-zinc-400 bg-zinc-700 w-fit h-fit text-sm rounded p-1">
                  mui
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-5 mb-10">
          <button className="uppercase underline text-yellow-400 hover:text-zinc-400 active:text-zinc-400">
            See All Projects
          </button>
        </div>
      </section>
    );
  }
}
