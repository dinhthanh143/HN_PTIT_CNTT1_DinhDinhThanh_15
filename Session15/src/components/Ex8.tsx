import React, { Component } from "react";
type stateType = {
  count: number;
};
export default class Ex8 extends Component<object, stateType> {
  private timerId: ReturnType<typeof setInterval> | null = null;
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
  componentDidUpdate(prevProps: object, prevState: Readonly<stateType>): void {
    if (prevState.count === 10) {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.setState(() => ({ count: 0 }));
    }
  }

  render() {
    return <div>Count : {this.state.count}</div>;
  }
}
