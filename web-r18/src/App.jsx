import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom';
import { Navbar, Modal, Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { withAsync } from './utils';
import AppCache from './data/cache';
import Title from './data/title';
import Options from './data/options';
import { notifyMessage } from './notify';

import DataMenu from './DataMenu';
import DataView from './DataView';
import HomePage from './HomePage';

import './App.scss';

const Spinner = () => <div className='Spinner'/>;

const WithData = withAsync({
  data: ({id}, cache) => cache.data(id)
}, ({data, children}) => (
  <AppCache.DataContext.Provider value={data}>
    {children}
  </AppCache.DataContext.Provider>
), undefined, () => <Navigate to='/'/>);
WithData.contextType = AppCache.Context;

function isDropFile(e) {
  if (e.dataTransfer.items) {
    for (let i = 0; i < e.dataTransfer.items.length; ++i) {
      if (e.dataTransfer.items[i].kind === 'file') {
        return true;
      }
    }
  } if (e.dataTransfer.files.length) {
    return true;
  }
  return false;
}
function getDropFile(e) {
  if (e.dataTransfer.items) {
    for (let i = 0; i < e.dataTransfer.items.length; ++i) {
      if (e.dataTransfer.items[i].kind === 'file') {
        return e.dataTransfer.items[i].getAsFile();
      }
    }
  } if (e.dataTransfer.files.length) {
    return e.dataTransfer.files[0];
  }
}

class App extends React.PureComponent {
  
  static propTypes = {
    params: PropTypes.object,
  };

  static contextType = AppCache.Context;

  get build() {
    return this.props.params;
  }

  state = {
    loading: 0,
    dropping: 0,
  }

  onLoading = loading => {
    this.setState({loading});
  }

  componentDidMount() {
    this.context.subscribe(this.onLoading);
    document.addEventListener('drop', this.onDrop, true);
    document.addEventListener('dragover', this.onDragOver, true);
    document.addEventListener('dragenter', this.onDragEnter, true);
    document.addEventListener('dragleave', this.onDragLeave, true);
  }
  componentWillUnmount() {
    this.context.unsubscribe(this.onLoading);

    document.removeEventListener('drop', this.onDrop, true);
    document.removeEventListener('dragover', this.onDragOver, true);
    document.removeEventListener('dragenter', this.onDragEnter, true);
    document.removeEventListener('dragleave', this.onDragLeave, true);
  }

  setDropping(inc) {
    this.setState(({dropping}) => ({dropping: Math.max(dropping + inc, 0)}));
  }

  onDrop = e => {
    const file = getDropFile(e);
    if (file) {
      e.preventDefault();
      this.context.loadMap(file);
    }
    this.setState({dropping: 0});
  }
  onDragEnter = e => {
    e.preventDefault();
    this.setDropping(1);
  }
  onDragOver = e => {
    if (isDropFile(e)) {
      e.preventDefault();
    }
  }
  onDragLeave = e => {
    this.setDropping(-1);
  }

  render() {
    //const { versions, loading } = this.state;
    const build = this.build;
    if (build && !this.context.hasData(build)) {
      notifyMessage(`No data for ${build}`, 'warning');
      return <Navigate to="/"/>;
    }
    return (
      <React.Fragment>
        {this.state.dropping > 0 && <div className="DropFrame"/>}
        <Navbar className="app-navbar">
          <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand'>
                <span className="AppIcon" />
                {!build ? <span className='TitleText'>WC3 Data</span> : <span></span>}
              </Link>
            </Navbar.Brand>
            {!!build && <Navbar.Collapse>
              <WithData id={build}>
                <DataMenu/>
              </WithData>
            </Navbar.Collapse>}
          </Container>
        </Navbar>
        {build ? (
          <WithData id={build}>
            <DataView/>
          </WithData>
        ) : (
          <HomePage/>
        )}
        {this.state.loading > 0 && <Spinner/>}
      </React.Fragment>
    );
  }
}

const AppLoader = withAsync({
  ready: (props, cache) => cache.ready,
}, App, undefined, undefined);
AppLoader.contextType = AppCache.Context;

class MapDialog extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    error: PropTypes.string,
    onHide: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired,
  };

  renderStep(index, name) {
    const { progress, status } = this.props;
    if (progress >= index || (status != null && status !== false)) {
      return <li className="success"><FontAwesomeIcon icon={faCheck} />{name}</li>;
    } else if (status != null) {
      return <li className="failure"><FontAwesomeIcon icon={faXmark} />{name}</li>;      
    } else if (progress === index - 1) {
      return <li className="working"><FontAwesomeIcon icon={faCheck} />{name}...</li>;
    } else {
      return <li className="pending"><FontAwesomeIcon icon={faCheck} />{name}</li>;
    }
  }
  render() {
    const { name, status, error, onHide } = this.props;
    return (
      <Modal dialogClassName="MapDialog" show={name != null} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Processing {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="load-progress">
            {this.renderStep(0, "Downloading meta data")}
            {this.renderStep(1, "Loading objects")}
            {this.renderStep(2, "Writing objects")}
            {this.renderStep(3, "Identifying files")}
            {this.renderStep(4, "Copying files")}
            {this.renderStep(5, "Finishing")}
          </ul>
          {error != null && (
            <Card>
              <Card.Body><Card.Title>{error}</Card.Title></Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          {status == null && <Button variant="warning" onClick={onHide}>Cancel</Button>}
          {status != null && status !== false && (
            <LinkContainer to={`/${status}`}>
              <Button variant="info" onClick={onHide}>Open</Button>
            </LinkContainer>
          )}
          {status != null && <Button variant="info" onClick={onHide}>Ok</Button>}
        </Modal.Footer>
      </Modal>
    );
  }
}

class Root extends React.Component {
  cache = new AppCache(this);

  state = {
    mapLoadName: null,
    mapLoadProgress: -1,
    mapLoadStatus: null,
    mapLoadError: null,
  }

  navigateTo(url) {
    if (this.router) {
      this.router.history.push(url);
    }
  }

  beginMapLoad(name) {
    this.setState({mapLoadName: name, mapLoadProgress: -1, mapLoadStatus: null, mapLoadError: null});
  }
  onMapProgress(stage) {
    this.setState({mapLoadProgress: stage});
  }
  finishMapLoad(id) {
    this.setState({mapLoadStatus: id});
  }
  failMapLoad(error) {
    this.setState({mapLoadStatus: false, mapLoadError: error});
  }

  onCloseMapDialog = () => {
    this.cache.abortMap();
    this.setState({
      mapLoadName: null,
      mapLoadProgress: -1,
      mapLoadStatus: null,
      mapLoadError: null,
    });
  }
  
  render() {
    const { mapLoadName, mapLoadProgress, mapLoadStatus, mapLoadError } = this.state;
    return (
      <Router basename="/">
        <Title title="Warcraft III Data Viewer">
          <Options>
            <AppCache.Context.Provider value={this.cache}>
              <AppCache.MapsContext.Provider value={this.cache.maps}>
                <div className="App">
                  <MapDialog name={mapLoadName} status={mapLoadStatus} progress={mapLoadProgress} error={mapLoadError} onHide={this.onCloseMapDialog}/>
                  <Routes>
                    <Route path="/:build?" element={<AppLoader/>}/>
                  </Routes>
                </div>
              </AppCache.MapsContext.Provider>
            </AppCache.Context.Provider>
          </Options>
        </Title>
      </Router>
    )
  }
}

export default Root;
