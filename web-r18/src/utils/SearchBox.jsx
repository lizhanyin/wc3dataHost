import PropTypes from 'prop-types';
import React from 'react';
import keycode from 'keycode';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';

import './SearchBox.scss';

class SearchBox extends React.Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {results: null, show: false};
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onGlobalKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onGlobalKeyDown);
  }
  onGlobalKeyDown = (e) => {
    switch (e.which) {
    case keycode.codes.f:
      if (e.ctrlKey) {
        this.show();
        e.preventDefault();
      }
      break;
    case keycode.codes.f3:
      this.show();
      if (e.shiftKey) {
        this.findPrev();
      } else {
        this.findNext();        
      }
      if (this._input) {
        this._input.focus();
        this._input.select();
      }
      e.preventDefault();
      break;
    default:
    }
  }
  show() {
    this.setState({show: true});
    if (this._input) {
      this._input.focus();
      this._input.select();
    }
  }
  hide = () => {
    this.setState({results: this.props.onSearch('', 0)});
    this.setState({show: false});
  }
  findNext = () => {
    if (this._input) this.setState({results: this.props.onSearch(this._input.value, 1)});
  }
  findPrev = () => {
    if (this._input) this.setState({results: this.props.onSearch(this._input.value, -1)});
  }
  onKeyDown = (e) => {
    switch (e.which) {
    case keycode.codes.esc:
      this.hide();
      break;
    case keycode.codes.enter:
      this.findNext();
      break;
    default:
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.show && !prevState.show && this._input) {
      this._input.select();
      this._input.focus();
    }
  }
  onChange = (e) => {
    this.setState({results: this.props.onSearch(e.target.value, 0)});
  }
  render() {
    const { show, results } = this.state;
    const found = (results && results.count);
    return (
      <div className={classNames("SearchBox", {"search-hidden": !show})} onKeyDown={this.onKeyDown}>
        <input type="text" ref={node => this._input = node} onChange={this.onChange}/>
        {!!results && <span className="count">{(results.pos + 1) + "/" + results.count}</span>}
        <span className="separator"/>
        <button disabled={!found} onClick={this.findPrev} title="Previous"><FontAwesomeIcon icon={faChevronUp} /></button>
        <button disabled={!found} onClick={this.findNext} title="Next"><FontAwesomeIcon icon={faChevronDown} /></button>
        <button onClick={this.hide} title="Close find bar"><FontAwesomeIcon icon={faXmark} /></button>
      </div>
    );
  }
}

export { SearchBox };
export default SearchBox;
