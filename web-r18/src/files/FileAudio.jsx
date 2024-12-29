import React from 'react';
import PropTypes from 'prop-types';

export default class FileAudioView extends React.PureComponent {
  static propTypes = {
    audio: PropTypes.string.isRequired,
  };

  render() {
    const { audio } = this.props;
    return (
      <div>
        <audio controls controlsList="nodownload" src={audio}/>
      </div>
    );
  }
}
