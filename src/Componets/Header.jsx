import { Component } from "react";
import { Lightbulb, LightbulbFill } from "react-bootstrap-icons";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { light: false };
  }

  render() {
    return (
      <header className="font-body text-white bg-zinc-800 flex justify-between pt-8 px-10 xl:px-40">
        <h3 className="font-semibold cursor-default text-2xl">
          &lt;/<span className="text-yellow-400">Yeabsera</span>&gt;
        </h3>
      </header>
    );
  }
}
