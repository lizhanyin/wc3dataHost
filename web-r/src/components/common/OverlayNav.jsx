import React from "react";
import { TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui";

class PopupWrap extends React.Component {
  componentDidMount() {
    this.props.setActive(true);
  }
  componentWillUnmount() {
    this.props.setActive(false);
  }
  render() {
    const {setActive, children, ...props} = this.props;
    const child = React.Children.only(children);
    return React.cloneElement(child, props);
  }
}

export default class OverlayNav extends React.Component {
  state = {active: false}

  setActive = active => this.setState({active})

  render() {
    const {children, overlay, ...props} = this.props;
    const child = React.Children.only(children);
    return (
      <TooltipRoot>
        <TooltipTrigger>
          {React.cloneElement(child, {active: this.state.active.toString()})}
        </TooltipTrigger>
        <TooltipContent>
          <PopupWrap setActive={this.setActive}>{overlay}</PopupWrap>
        </TooltipContent>
      </TooltipRoot>
    )
  }
}

export { OverlayNav };
