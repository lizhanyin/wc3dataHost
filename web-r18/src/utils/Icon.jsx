import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class Icon extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  onLoad = () => {
    this.setState({visible: true});
  }
  
  //componentWillReceiveProps(newProps)
  getDerivedStateFromProps(newProps) {
    if (newProps.src !== this.props.src) {
      this.setState({visible: false});
    }
  }
  
  render() {
    const { className, ...props } = this.props;
    return <img {...props} className={classNames(className, {"image-loading": !this.state.visible})} onLoad={this.onLoad}/>;
  }
}

export { Icon };
export default Icon;
