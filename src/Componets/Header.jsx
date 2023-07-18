import { Component } from "react";
import { List, XLg, Linkedin, Github, Envelope } from "react-bootstrap-icons";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <header className="font-body text-white bg-zinc-800 flex justify-between pt-8 px-10 xl:px-40">
        <div className="flex gap-2 text-4xl items-start">
          <button
            className="relative before:{content, absolute,bg-red lg:hidden"
            onClick={this.handleMenu}
          >
            {!this.state.open ? <XLg /> : <List />}
          </button>
          <h3 className="font-semibold text-zinc-300 cursor-default">
            Yeabsera
          </h3>
          <h3 className="cursor-default">.L</h3>
        </div>
        {this.state.open && (
          <nav className="flex flex-col gap-3 absolute top-20 p-5 text-xl bg-zinc-900 w-7/12 lg:flex-row lg:static lg:p-0 lg:items-center lg:gap-10 lg:bg-zinc-800 lg:text-sm lg:w-fit">
            <a
              className="hover:text-emerald-400 active:text-emerald-300"
              href=""
            >
              Services
            </a>
            <a
              className="hover:text-emerald-400 active:text-emerald-300"
              href=""
            >
              Works
            </a>
            <a
              className="hover:text-emerald-400 active:text-emerald-300"
              href=""
            >
              Notes
            </a>
            <a
              className="hover:text-emerald-400 active:text-emerald-300"
              href=""
            >
              Connects
            </a>
            <nav className="flex gap-2 justify-evenly mt-10 lg:hidden ">
              <a className="hover:text-emerald-400 active:text-emerald-300">
                <Linkedin size={25} />
              </a>
              <a className="hover:text-emerald-400 active:text-emerald-300">
                <Github size={25} />
              </a>
              <a className="hover:text-emerald-400 active:text-emerald-300">
                <Envelope size={25} />
              </a>
            </nav>
          </nav>
        )}
        <nav className="hidden lg:flex lg:items-end lg:gap-3 lg:text-sm">
          <a
            href=""
            className="flex p-3.5 items:center rounded-full hover:bg-zinc-700 hover:text-emerald-400 active:text-emerald-300"
          >
            <Linkedin size={20} />
          </a>

          <a
            href=""
            className="flex p-3.5 items:center rounded-full hover:bg-zinc-700 hover:text-emerald-400 active:text-emerald-300"
          >
            <Github size={20} />
          </a>
          <a
            href=""
            className="flex p-3.5 items:center rounded-full hover:bg-zinc-700 hover:text-emerald-400 active:text-emerald-300"
          >
            <Envelope size={20} />
          </a>
        </nav>
      </header>
    );
  }
}
