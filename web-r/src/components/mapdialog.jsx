

import React from 'react';
import PropTypes from 'prop-types';

class MapDialog extends React.Component {

  // static propTypes = {
  //   progress: PropTypes.number.isRequired,
  //   status: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.bool
  //   ]),
  //   name: PropTypes.string,
  //   error: PropTypes.string,
  //   onHide: PropTypes.func.isRequired
  // };

  renderStep(index, name) {
    // const { progress, status } = this.props;
    // if (progress >= index || (status != null && status !== false)) {
    //   return <li className="success"><Glyphicon glyph="ok" />{name}</li>;
    // } else if (status != null) {
    //   return <li className="failure"><Glyphicon glyph="remove" />{name}</li>;
    // } else if (progress === index - 1) {
    //   return <li className="working"><Glyphicon glyph="ok" />{name}...</li>;
    // } else {
    //   return <li className="pending"><Glyphicon glyph="ok" />{name}</li>;
    // }
  }
  render() {
    const { name, status, error, onHide } = this.props;
    // return (
    //   <Modal dialogClassName="MapDialog" show={name != null} onHide={onHide}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Processing {name}</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <ul className="load-progress">
    //         {this.renderStep(0, "Downloading meta data")}
    //         {this.renderStep(1, "Loading objects")}
    //         {this.renderStep(2, "Writing objects")}
    //         {this.renderStep(3, "Identifying files")}
    //         {this.renderStep(4, "Copying files")}
    //         {this.renderStep(5, "Finishing")}
    //       </ul>
    //       {error != null && (
    //         <Panel bsStyle="danger">
    //           <Panel.Heading><Panel.Title>{error}</Panel.Title></Panel.Heading>
    //         </Panel>
    //       )}
    //     </Modal.Body>
    //     <Modal.Footer>
    //       {status == null && <Button bsStyle="warning" onClick={onHide}>Cancel</Button>}
    //       {status != null && status !== false && (
    //         <LinkContainer to={`/${status}`}>
    //           <Button bsStyle="info" onClick={onHide}>Open</Button>
    //         </LinkContainer>
    //       )}
    //       {status != null && <Button bsStyle="info" onClick={onHide}>Ok</Button>}
    //     </Modal.Footer>
    //   </Modal>
    // );
    return <></>
  }
}

export default MapDialog;