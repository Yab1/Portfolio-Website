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

export default class Navigation extends Component {
  render() {
    return (
      <div className="flex justify-center flex-col align-center w-fit gap-5 fixed right-5 inset-y-0">
        <a
          href="#home"
          className="bg-zinc-700 p-2 lg:p-3 text-white rounded-full hover:bg-yellow-400 "
        >
          <HouseDoorFill size={20} />
        </a>

        <a
          href="#about"
          className="bg-zinc-700 p-2 lg:p-3  text-white rounded-full hover:bg-yellow-400 "
        >
          <PersonFill size={20} />
        </a>
        <a
          href="#works"
          className="bg-zinc-700 p-2 lg:p-3  text-white rounded-full hover:bg-yellow-400 "
        >
          <Briefcase size={20} />
        </a>

        <a
          href="#contact"
          className="bg-zinc-700 p-2 lg:p-3  text-white rounded-full hover:bg-yellow-400 "
        >
          <Envelope size={20} />
        </a>
      </div>
    );
  }
}
