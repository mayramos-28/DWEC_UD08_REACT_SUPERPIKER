import React from "react";
import Gradient from "./Gradient";
import { Range } from "./Range";

export class Piker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0,
      saturation: 0,
      steps: 5,
    };
  }

  render() {
    return (
      <>
        <h1>Super piker</h1>
        <Range
          nameSlider={"Hue"}
          min={0}
          max={360}
          value={this.state.hue}
          onChangeValue={(e) => this.setState({ ...this.state, hue: e })}
        />
        <Range
          nameSlider={"Saturation"}
          min={0}
          max={100}
          value={this.state.saturation}
          onChangeValue={(e) => this.setState({ ...this.state, saturation: e })}
        />
        <Range
          nameSlider={"Steps "}
          min={5}
          max={100}
          value={this.state.steps}
          onChangeValue={(e) => this.setState({ ...this.state, steps: e })}
        />

        <div className="main">
          <Gradient
            hue={this.state.hue}
            saturation={this.state.saturation}
            number={this.state.steps}
          />
        </div>
      </>
    );
  }
}
