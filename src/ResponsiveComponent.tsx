import { Component } from "react";
import { Dimensions, ScaledSize } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResponsiveComponentProps {}

interface ResponsiveComponentState {
  window: ScaledSize;
}

export default abstract class ResponsiveComponent extends Component<
  ResponsiveComponentProps,
  ResponsiveComponentState
> {
  state = {
    window: Dimensions.get("window"),
  };
  changeEventListener;

  componentDidMount() {
    this.changeEventListener = Dimensions.addEventListener("change", this.onDimensionChange);
  }

  componentWillUnmount() {
    if (this.changeEventListener) {
      this.changeEventListener.remove();
    }
  }

  onDimensionChange = (dims: ResponsiveComponentState) => this.setState(dims);
}
