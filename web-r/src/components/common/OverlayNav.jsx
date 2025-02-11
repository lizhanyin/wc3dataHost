import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

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
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            {React.cloneElement(child, {active: this.state.active})}
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-whitea-12 dark:bg-blacka-12 px-[15px] py-2.5 text-[15px] leading-none text-blue-11 border-1 shadow-gray-7 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-in-from-bottom-400 data-[state=delayed-open]:data-[side=left]:animate-slide-in-from-left-400 data-[state=delayed-open]:data-[side=right]:animate-slide-in-from-right-400 data-[state=delayed-open]:data-[side=top]:animate-slide-in-from-top-400"
              sideOffset={5}
            >
              <PopupWrap setActive={this.setActive}>{overlay}</PopupWrap>
              <Tooltip.Arrow className="fill-blue-11 dark:fill-blue-11" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    )
  }
}

export { OverlayNav };
